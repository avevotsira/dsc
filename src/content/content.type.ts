export const DIRECTIVE_TYPES = {
  SUB_DECREE: "sub-decree",
  ROYAL_DECREE: "royal-decree",
  POLICY: "policy",
  DECISION: "decision",
  PRESS_RELEASE: "press-release",
} as const;

export type DirectiveType =
  (typeof DIRECTIVE_TYPES)[keyof typeof DIRECTIVE_TYPES];
