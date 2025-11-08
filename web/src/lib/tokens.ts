// Re-export JS tokens for TypeScript consumers in web
import tokensPackage from "../../../packages/tokens/index.js";

type Tokens = typeof import("../../../packages/tokens/index.js")["tokens"];

export const tokens = (tokensPackage as { tokens: Tokens }).tokens;
export type { Tokens };
