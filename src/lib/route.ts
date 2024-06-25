import type { SupportedLanguage } from "@/i18n/ui";
import { removeLanguagePrefix } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export enum Routes {
  Home = "/",
  About = "/articles",
  Projects = "/projects",
  Contact = "/contact",
}

/**
 * Maps paths to localized routes based on the specified locale.
 *
 * @param {Array<{ href: string; label: string }>} paths - The array of paths containing href and label.
 * @param {string} locale - The locale to use for localization, defaults to defaultLang.
 * @return {Array<{ href: string; label: string }>} The array of localized routes.
 */
export function getLocalizedRoutes(
  paths: { href: string; label: string }[],
  locale: string,
) {
  return paths.map((path) => ({
    ...path,
    href: getRelativeLocaleUrl(locale, path.href),
  }));
}

export const getArticleUrl = (slug: string, lang: SupportedLanguage) => {
  return getRelativeLocaleUrl(
    lang,
    `articles/${removeLanguagePrefix(slug, lang)}`,
  );
};

export function getLocalizedUrl(path: string, locale: string): string {
  return getRelativeLocaleUrl(locale, path);
}
