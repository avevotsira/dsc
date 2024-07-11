import type { SupportedLanguage } from "@/i18n/ui";
import { removeLanguagePrefix } from "@/i18n/utils";
import { getRelativeLocaleUrl } from "astro:i18n";

export enum Routes {
  Home = "/",
  About = "/about",
  Structure = "/structure",
  RoyalDecrees = "/royal-decrees",
  SubDecrees = "/sub-decrees",
  Policies = "/policies",
  Decisions = "/decisions",
  Videos = "/videos",
  Aritcles = "/articles",
  Projects = "/projects",
  Contact = "/contact",
  Leader = "/about/leader",
  CybersecurityTips = "/cybersecurity-tips",
}

export const NavRoutes = [
  { label: "Home", href: Routes.Home },
  {
    label: "About Us",
    children: [
      { label: "About DSC", href: Routes.About },
      { label: "DSC's Structure", href: Routes.Structure },
      { label: "DSC's Leaders", href: Routes.Leader },
    ],
  },
  {
    label: "Media Hub",
    children: [
      { label: "Royal Degrees", href: Routes.RoyalDecrees },
      { label: "Sub Degrees", href: Routes.SubDecrees },
      { label: "Policies", href: Routes.Policies },
      { label: "Decisions", href: Routes.Decisions },
      { label: "Videos", href: Routes.Videos },
    ],
  },
  { label: "New & Events", href: Routes.Aritcles },
  { label: "Cybersecurity Tips", href: Routes.CybersecurityTips },
];

interface RouteType {
  href?: string;
  label: string;
  children?: RouteType[];
}

/**
 * Maps paths to localized routes based on the specified locale.
 */
export function getLocalizedRoute(
  paths: Array<{ href: string; label: string }>,
  locale: string,
): Array<{ href: string; label: string }> {
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
    }

    if (path.children) {
      return {
        label: path.label,
        children: getLocalizedRoutes(path.children, locale),
      };
    }

    return path;
  });
}

export const getArticleUrl = (slug: string, lang: SupportedLanguage) => {
  return getRelativeLocaleUrl(
    lang,
    `articles/${removeLanguagePrefix(slug, lang)}`,
  );
};

export const getTipsUrl = (slug: string, lang: SupportedLanguage) => {
  return getRelativeLocaleUrl(lang, `tips/${removeLanguagePrefix(slug, lang)}`);
};
