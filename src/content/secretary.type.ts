export const SECRETARY_TYPES = {
  GENERAL: "secretary-general",
  DEPUTY: "deputy-secretary-general",
} as const;

export type SecretaryType =
  (typeof SECRETARY_TYPES)[keyof typeof SECRETARY_TYPES];
