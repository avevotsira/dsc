export const ui: Record<string, Record<string, string>> = {
	en: {
		"nav.home": "Home",
		"nav.about": "About",
	},
	km: {
		"nav.home": "Accueil",
		"nav.about": "À propos",
	},
} as const;

export const languages = {
	en: "en",
	km: "km",
} as const;

export const defaultLang = languages.en;

export const supportedLanguages = [languages.en, languages.km] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];
