export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "home.whatwedo": "What We Do",
  },
  km: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "home.whatwedo": "កាតព្វកិច្ចរបស់យើង",
  },
} as const;

export const languages = {
  en: "en",
  km: "km",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang = languages.en;
