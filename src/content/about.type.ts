export const ABOUT_TYPES = {
  GOAL: "goal",
  STRATEGIES: "strategies",
  ROLE: "role",
} as const;

export type AboutType = (typeof ABOUT_TYPES)[keyof typeof ABOUT_TYPES];
