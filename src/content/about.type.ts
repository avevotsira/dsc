export const ABOUT_TYPES = {
  GOAL: "goal",
  ROLE: "role",
} as const;

export type AboutType = (typeof ABOUT_TYPES)[keyof typeof ABOUT_TYPES];
