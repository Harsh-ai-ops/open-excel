import { Type } from "@sinclair/typebox";
import { defineTool, toolError, toolSuccess } from "./types";

/* global Excel */

export const evalOfficeJsTool = defineTool({
  name: "eval_officejs",
  label: "Execute Office.js Code",
  description:
    "Execute arbitrary Office.js code within an Excel.run context. " +
    "Use this as an escape hatch when existing tools don't cover your use case. " +
    "The code runs inside `Excel.run(async (context) => { ... })` with `context` available. " +
    "Return a value to get it back as the result. Always call `await context.sync()` before returning.",
  parameters: Type.Object({
    code: Type.String({
      description:
        "JavaScript code to execute. Has access to `context` (Excel.RequestContext). " +
        "Must be valid async code. Return a value to get it as result. " +
        "Example: `const range = context.workbook.worksheets.getActiveWorksheet().getRange('A1'); range.load('values'); await context.sync(); return range.values;`",
    }),
    explanation: Type.Optional(
      Type.String({
        description: "Brief explanation of what this code does (max 100 chars)",
        maxLength: 100,
      }),
    ),
  }),
  execute: async (_toolCallId, params) => {
    try {
      const result = await Excel.run(async (context) => {
        const wrappedCode = `return (async () => { ${params.code} })()`;
        const fn = new Function("context", "Excel", wrappedCode);
        return await fn(context, Excel);
      });
      return toolSuccess({ success: true, result: result ?? null });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error executing code";
      return toolError(message);
    }
  },
});
