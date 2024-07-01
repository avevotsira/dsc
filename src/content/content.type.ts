export const DECREE_TYPES = {
  SUB_DECREE: "sub-decree",
  ROYAL_DECREE: "royal-decree",
} as const;

export type DecreeType = (typeof DECREE_TYPES)[keyof typeof DECREE_TYPES];
