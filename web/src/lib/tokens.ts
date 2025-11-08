// Re-export JS tokens for TypeScript consumers in web
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { tokens } = require("../../../packages/tokens/index.js");
export type Tokens = typeof tokens;
export { tokens };


