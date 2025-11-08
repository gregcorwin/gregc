// Re-export shared tokens for React Native
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { tokens } = require("../../../packages/tokens/index.js");
export type Tokens = typeof tokens;
export { tokens };


