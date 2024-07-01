export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "home.whatwedo": "What We Do",
    "structure.heading": "Organization Structure of DSC General Secretariat",
  },
  km: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "home.whatwedo": "កាតព្វកិច្ចរបស់យើង",
    "structure.heading": "រចនាសម្ព័ន្ធរបស់អគ្គលេខាធិការដ្ឋាន គ.ស.ឌ.",
  },
} as const;

export const languages = {
  en: "en",
  km: "km",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang = languages.en;
