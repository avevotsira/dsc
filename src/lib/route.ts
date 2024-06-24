import { defaultLang } from "@/i18n/ui";
import { getRelativeLocaleUrl } from "astro:i18n";

export const routes = {
  home: { href: "/", label: "Home" },
  about: { href: "/articles", label: "Articles" },
  projects: { href: "/projects", label: "Projects" },
  contact: { href: "/contact", label: "Contact" },
};

/**
 * Maps paths to localized routes based on the specified locale.
 *
 * @param {Array<{ href: string; label: string }>} paths - The array of paths containing href and label.
 * @param {string} locale - The locale to use for localization, defaults to defaultLang.
 * @return {Array<{ href: string; label: string }>} The array of localized routes.
 */
export function getLocalizedRoutes(
  paths: { href: string; label: string }[],
  locale: string | undefined,
) {
  const currentLocale = locale ?? defaultLang;
  return paths.map((path) => ({
    ...path,
    href: getRelativeLocaleUrl(currentLocale, path.href),
  }));
}

export function getLocalizedUrl(
  path: string,
  locale: string | undefined,
): string {
  const currentLocale = locale ?? defaultLang;
  return getRelativeLocaleUrl(currentLocale, path);
}
