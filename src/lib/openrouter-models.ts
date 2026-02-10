import type { Model } from "@mariozechner/pi-ai";

export const OPENROUTER_FREE_MODELS: Model<any>[] = [
  {
    "id": "openrouter/aurora-alpha",
    "name": "Aurora Alpha",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 128000,
    "maxTokens": 50000
  },
  {
    "id": "openrouter/pony-alpha",
    "name": "Pony Alpha",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 200000,
    "maxTokens": 131000
  },
  {
    "id": "openrouter/free",
    "name": "Free Models Router",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text",
      "image"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 200000,
    "maxTokens": 32000
  },
  {
    "id": "stepfun/step-3.5-flash:free",
    "name": "StepFun: Step 3.5 Flash (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 256000,
    "maxTokens": 256000
  },
  {
    "id": "arcee-ai/trinity-large-preview:free",
    "name": "Arcee AI: Trinity Large Preview (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131000,
    "maxTokens": 32000
  },
  {
    "id": "upstage/solar-pro-3:free",
    "name": "Upstage: Solar Pro 3 (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 128000,
    "maxTokens": 32000
  },
  {
    "id": "liquid/lfm-2.5-1.2b-thinking:free",
    "name": "LiquidAI: LFM2.5-1.2B-Thinking (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 32768,
    "maxTokens": 32000
  },
  {
    "id": "liquid/lfm-2.5-1.2b-instruct:free",
    "name": "LiquidAI: LFM2.5-1.2B-Instruct (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": false,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 32768,
    "maxTokens": 32000
  },
  {
    "id": "nvidia/nemotron-3-nano-30b-a3b:free",
    "name": "NVIDIA: Nemotron 3 Nano 30B A3B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 256000,
    "maxTokens": 32000
  },
  {
    "id": "arcee-ai/trinity-mini:free",
    "name": "Arcee AI: Trinity Mini (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 32000
  },
  {
    "id": "tngtech/tng-r1t-chimera:free",
    "name": "TNG: R1T Chimera (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 163840,
    "maxTokens": 65536
  },
  {
    "id": "nvidia/nemotron-nano-12b-v2-vl:free",
    "name": "NVIDIA: Nemotron Nano 12B 2 VL (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text",
      "image"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 128000,
    "maxTokens": 128000
  },
  {
    "id": "qwen/qwen3-next-80b-a3b-instruct:free",
    "name": "Qwen: Qwen3 Next 80B A3B Instruct (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 262144,
    "maxTokens": 32000
  },
  {
    "id": "nvidia/nemotron-nano-9b-v2:free",
    "name": "NVIDIA: Nemotron Nano 9B V2 (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 128000,
    "maxTokens": 32000
  },
  {
    "id": "openai/gpt-oss-120b:free",
    "name": "OpenAI: gpt-oss-120b (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 131072
  },
  {
    "id": "openai/gpt-oss-20b:free",
    "name": "OpenAI: gpt-oss-20b (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 131072
  },
  {
    "id": "z-ai/glm-4.5-air:free",
    "name": "Z.AI: GLM 4.5 Air (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 96000
  },
  {
    "id": "qwen/qwen3-coder:free",
    "name": "Qwen: Qwen3 Coder 480B A35B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 262000,
    "maxTokens": 262000
  },
  {
    "id": "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
    "name": "Venice: Uncensored (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": false,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 32768,
    "maxTokens": 32000
  },
  {
    "id": "google/gemma-3n-e2b-it:free",
    "name": "Google: Gemma 3n 2B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 8192,
    "maxTokens": 2048
  },
  {
    "id": "tngtech/deepseek-r1t2-chimera:free",
    "name": "TNG: DeepSeek R1T2 Chimera (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 163840,
    "maxTokens": 32000
  },
  {
    "id": "deepseek/deepseek-r1-0528:free",
    "name": "DeepSeek: R1 0528 (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 163840,
    "maxTokens": 163840
  },
  {
    "id": "google/gemma-3n-e4b-it:free",
    "name": "Google: Gemma 3n 4B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": false,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 8192,
    "maxTokens": 2048
  },
  {
    "id": "qwen/qwen3-4b:free",
    "name": "Qwen: Qwen3 4B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 40960,
    "maxTokens": 32000
  },
  {
    "id": "tngtech/deepseek-r1t-chimera:free",
    "name": "TNG: DeepSeek R1T Chimera (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 163840,
    "maxTokens": 32000
  },
  {
    "id": "mistralai/mistral-small-3.1-24b-instruct:free",
    "name": "Mistral: Mistral Small 3.1 24B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text",
      "image"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 128000,
    "maxTokens": 32000
  },
  {
    "id": "google/gemma-3-4b-it:free",
    "name": "Google: Gemma 3 4B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text",
      "image"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 32768,
    "maxTokens": 8192
  },
  {
    "id": "google/gemma-3-12b-it:free",
    "name": "Google: Gemma 3 12B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text",
      "image"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 32768,
    "maxTokens": 8192
  },
  {
    "id": "google/gemma-3-27b-it:free",
    "name": "Google: Gemma 3 27B (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text",
      "image"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 8192
  },
  {
    "id": "meta-llama/llama-3.3-70b-instruct:free",
    "name": "Meta: Llama 3.3 70B Instruct (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": false,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 128000,
    "maxTokens": 128000
  },
  {
    "id": "meta-llama/llama-3.2-3b-instruct:free",
    "name": "Meta: Llama 3.2 3B Instruct (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 32000
  },
  {
    "id": "nousresearch/hermes-3-llama-3.1-405b:free",
    "name": "Nous: Hermes 3 405B Instruct (free)",
    "api": "openai-completions",
    "provider": "openrouter",
    "reasoning": true,
    "input": [
      "text"
    ],
    "cost": {
      "input": 0,
      "output": 0,
      "cacheRead": 0,
      "cacheWrite": 0
    },
    "contextWindow": 131072,
    "maxTokens": 32000
  }
];
