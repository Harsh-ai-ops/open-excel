import type { AgentMessage } from "@mariozechner/pi-agent-core";
import type { UserMessage } from "@mariozechner/pi-ai";
import Dexie, { type Table } from "dexie";
import { stripEnrichment } from "../message-utils";

export interface ChatSession {
  id: string;
  workbookId: string;
  name: string;
  agentMessages: AgentMessage[];
  createdAt: number;
  updatedAt: number;
}

export interface VfsFile {
  id: string; // "{sessionId}:{path}" composite key
  sessionId: string;
  path: string;
  data: Uint8Array;
}

export interface SkillFile {
  id: string; // "{skillName}:{path}" composite key
  skillName: string;
  path: string; // relative path within skill folder, e.g. "SKILL.md"
  data: Uint8Array;
}

class OpenExcelDB extends Dexie {
  sessions!: Table<ChatSession, string>;
  vfsFiles!: Table<VfsFile, string>;
  skillFiles!: Table<SkillFile, string>;

  constructor() {
    super("OpenExcelDB_v3");
    this.version(1).stores({
      sessions: "id, workbookId, updatedAt",
    });
    this.version(2).stores({
      sessions: "id, workbookId, updatedAt",
      vfsFiles: "id, sessionId",
    });
    this.version(3).stores({
      sessions: "id, workbookId, updatedAt",
      vfsFiles: "id, sessionId",
      skillFiles: "id, skillName",
    });
  }
}

const db = new OpenExcelDB();

export { db };

function extractUserText(msg: AgentMessage): string | null {
  if (msg.role !== "user") return null;
  const text = stripEnrichment((msg as UserMessage).content).trim();
  return text || null;
}

function deriveSessionName(agentMessages: AgentMessage[]): string | null {
  const firstUser = agentMessages.find((m) => m.role === "user");
  if (!firstUser) return null;
  const text = extractUserText(firstUser);
  if (!text) return null;
  return text.length > 40 ? `${text.slice(0, 37)}...` : text;
}

export function getSessionMessageCount(session: ChatSession): number {
  return (session.agentMessages ?? []).filter((m) => m.role === "user" || m.role === "assistant").length;
}

export async function getOrCreateWorkbookId(): Promise<string> {
  return new Promise((resolve, reject) => {
    const settings = Office.context.document.settings;
    let workbookId = settings.get("openexcel-workbook-id") as string | null;

    if (workbookId) {
      resolve(workbookId);
      return;
    }

    workbookId = crypto.randomUUID();
    settings.set("openexcel-workbook-id", workbookId);
    settings.saveAsync((result) => {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        resolve(workbookId);
      } else {
        reject(new Error(result.error?.message ?? "Failed to save workbook ID"));
      }
    });
  });
}

export async function listSessions(workbookId: string): Promise<ChatSession[]> {
  const sessions = await db.sessions.where("workbookId").equals(workbookId).reverse().sortBy("updatedAt");
  // breaking: old sessions will be blanked out
  for (const s of sessions) {
    if (!s.agentMessages) s.agentMessages = [];
  }
  return sessions;
}

export async function createSession(workbookId: string, name?: string): Promise<ChatSession> {
  const now = Date.now();
  const session: ChatSession = {
    id: crypto.randomUUID(),
    workbookId,
    name: name ?? "New Chat",
    agentMessages: [],
    createdAt: now,
    updatedAt: now,
  };
  await db.sessions.add(session);
  return session;
}

export async function getSession(sessionId: string): Promise<ChatSession | undefined> {
  const session = await db.sessions.get(sessionId);
  if (session && !session.agentMessages) {
    // breaking: old sessions will be blanked out
    session.agentMessages = [];
  }
  return session;
}

export async function saveSession(sessionId: string, agentMessages: AgentMessage[]): Promise<void> {
  console.log("[DB] saveSession:", sessionId, "agentMessages:", agentMessages.length);
  const session = await db.sessions.get(sessionId);
  if (!session) {
    console.error("[DB] Session not found for save:", sessionId);
    return;
  }
  let name = session.name;
  if (name === "New Chat") {
    const derivedName = deriveSessionName(agentMessages);
    if (derivedName) name = derivedName;
  }
  await db.sessions.put({
    ...session,
    agentMessages,
    name,
    updatedAt: Date.now(),
  });
  console.log("[DB] saveSession complete");
}

export async function renameSession(sessionId: string, name: string): Promise<void> {
  const session = await db.sessions.get(sessionId);
  if (session) {
    await db.sessions.put({ ...session, name });
  }
}

export async function deleteSession(sessionId: string): Promise<void> {
  await db.sessions.delete(sessionId);
}

export async function getOrCreateCurrentSession(workbookId: string): Promise<ChatSession> {
  const sessions = await listSessions(workbookId);
  if (sessions.length > 0) {
    const session = sessions[0];
    if (!session.agentMessages) session.agentMessages = [];
    return session;
  }
  return createSession(workbookId);
}

export async function saveVfsFiles(sessionId: string, files: { path: string; data: Uint8Array }[]): Promise<void> {
  console.log("[DB] saveVfsFiles:", sessionId, "files:", files.length);
  await db.transaction("rw", db.vfsFiles, async () => {
    await db.vfsFiles.where("sessionId").equals(sessionId).delete();
    if (files.length > 0) {
      await db.vfsFiles.bulkAdd(
        files.map((f) => ({
          id: `${sessionId}:${f.path}`,
          sessionId,
          path: f.path,
          data: f.data,
        })),
      );
    }
  });
}

export async function loadVfsFiles(sessionId: string): Promise<{ path: string; data: Uint8Array }[]> {
  const rows = await db.vfsFiles.where("sessionId").equals(sessionId).toArray();
  console.log("[DB] loadVfsFiles:", sessionId, "files:", rows.length);
  return rows.map((r) => ({ path: r.path, data: r.data }));
}

export async function deleteVfsFiles(sessionId: string): Promise<void> {
  await db.vfsFiles.where("sessionId").equals(sessionId).delete();
}

export async function saveSkillFiles(skillName: string, files: { path: string; data: Uint8Array }[]): Promise<void> {
  await db.transaction("rw", db.skillFiles, async () => {
    await db.skillFiles.where("skillName").equals(skillName).delete();
    if (files.length > 0) {
      await db.skillFiles.bulkAdd(
        files.map((f) => ({
          id: `${skillName}:${f.path}`,
          skillName,
          path: f.path,
          data: f.data,
        })),
      );
    }
  });
}

export async function loadSkillFiles(skillName: string): Promise<{ path: string; data: Uint8Array }[]> {
  const rows = await db.skillFiles.where("skillName").equals(skillName).toArray();
  return rows.map((r) => ({ path: r.path, data: r.data }));
}

export async function loadAllSkillFiles(): Promise<{ skillName: string; path: string; data: Uint8Array }[]> {
  const rows = await db.skillFiles.toArray();
  return rows.map((r) => ({ skillName: r.skillName, path: r.path, data: r.data }));
}

export async function deleteSkillFiles(skillName: string): Promise<void> {
  await db.skillFiles.where("skillName").equals(skillName).delete();
}

export async function listSkillNames(): Promise<string[]> {
  const keys = await db.skillFiles.orderBy("skillName").uniqueKeys();
  return keys as string[];
}
