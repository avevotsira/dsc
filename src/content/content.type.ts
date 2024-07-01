export const POLICY_TYPES = {
  SUB_DECREE: "sub-decree",
  ROYAL_DECREE: "royal-decree",
  POLITIC: "politic",
  DECISION: "decision",
} as const;

export type PolicyType = (typeof POLICY_TYPES)[keyof typeof POLICY_TYPES];
