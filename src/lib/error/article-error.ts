import type { SupportedLanguage } from "@/i18n/ui";

export class InvalidArticleFilenameError extends Error {
	constructor(
		slug: string,
		lang: string,
		supportedLanguages: readonly SupportedLanguage[],
	) {
		super(
			`Invalid article filename detected: '${slug}'. The language code '${lang}' is not supported. Please ensure the filename follows the convention 'slug/lang.md', where 'lang' is one of the supported languages: ${supportedLanguages.join(", ")}.`,
		);
		this.name = "InvalidArticleFilenameError";
	}
}
