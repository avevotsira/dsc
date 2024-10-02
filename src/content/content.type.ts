export const DIRECTIVE_TYPES = {
  SUB_DECREE: "subDecree",
  ROYAL_DECREE: "royalDecree",
  POLICY: "policy",
  DECISION: "decision",
  PRESS_RELEASE: "pressRelease",
} as const;

export type DirectiveType =
  (typeof DIRECTIVE_TYPES)[keyof typeof DIRECTIVE_TYPES];
