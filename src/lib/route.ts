import type { SupportedLanguage } from "@/i18n/ui";
import { removeLanguagePrefix } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export enum Routes {
  Home = "/",
  About = "/about",
  Aritcles = "/articles",
  Projects = "/projects",
  Contact = "/contact",
}

interface RouteType {
  href?: string;
  label: string;
  children?: RouteType[];
}

/**
 * Maps paths to localized routes based on the specified locale.
 *
 * @param {Array<{ href: string; label: string }>} paths - The array of paths containing href and label.
 * @param {string} locale - The locale to use for localization, defaults to defaultLang.
 * @return {Array<{ href: string; label: string }>} The array of localized routes.
 */
export function getLocalizedRoute(
  paths: { href: string; label: string }[],
  locale: string,
) {
  return paths.map((path) => ({
    ...path,
    href: getRelativeLocaleUrl(locale, path.href),
  }));
}

export function getLocalizedRoutes(
  paths: RouteType[],
  locale: string,
): RouteType[] {
  return paths.map((path) => {
    if (path.href) {
      return {
        label: path.label,
        href: getRelativeLocaleUrl(locale, path.href),
      };
    } else if (path.children) {
      return {
        label: path.label,
        children: getLocalizedRoutes(path.children, locale),
      };
    } else {
      return path;
    }
  });
}

export const getArticleUrl = (slug: string, lang: SupportedLanguage) => {
  return getRelativeLocaleUrl(
    lang,
    `articles/${removeLanguagePrefix(slug, lang)}`,
  );
};
