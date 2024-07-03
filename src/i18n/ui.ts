export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "home.whatwedo": "What We Do",
    "structure.heading": "Organization Structure of DSC General Secretariat",
    "about.strategies": "Strategic Goals and Strategies",
    "about.strategiesText":
      "In order to achieve the above vision and objectives, the Royal Government has set four strategic goals and ten strategies as follows:",
    "about.roleResponsibilities": "Role and Responsibilites",
  },
  km: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "home.whatwedo": "កាតព្វកិច្ចរបស់យើង",
    "structure.heading": "រចនាសម្ព័ន្ធរបស់អគ្គលេខាធិការដ្ឋាន គ.ស.ឌ.",
    "about.strategies": "គោលដៅជាយុទ្ធសាស្រ្ត និងយុទ្ធសាស្ត្រ",
    "about.strategiesText":
      "ដើម្បីសម្រេចបាននូវចក្ខុវិស័យនិងគោលបំណងខាងលើ រដ្ឋាភិបាលដាក់ចេញគោលដៅជាយុទ្ធសាស្ត្រចំនួន៤និងយុទ្ធសាស្ត្រចំនួន១០ ដូចខាងក្រោម៖",
    "about.roleResponsibilities": "តួនាទី និងភារកិច្ច",
  },
} as const;

export const languages = {
  en: "en",
  km: "km",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang = languages.en;
