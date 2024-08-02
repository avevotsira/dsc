import type { SupportedLanguage } from "@/i18n/ui";
import { removeLanguagePrefix } from "@/i18n/utils";
import type { CollectionEntry } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";

export enum Routes {
  Home = "/",
  About = "/about",
  Structure = "/about/structure",
  Leader = "/about/leader",
  Unit = "/about/units",
  LawsRegulations = "/laws-regulations",
  Policies = "/policies",
  PressRelease = "/press-release",
  Videos = "/videos",
  Aritcles = "/articles",
  Projects = "/projects",
  Contact = "/contact",
  CybersecurityTips = "/cybersecurity-tips",
}

export const NavRoutes = [
  { label: "Home", href: Routes.Home },
  {
    label: "Explore DSC",
    children: [
      { label: "About DSC", href: Routes.About },
      { label: "DSC's Structure", href: Routes.Structure },
      { label: "DSC's Leaders", href: Routes.Leader },
      { label: "DSC's Units", href: Routes.Unit },
    ],
  },
  {
    label: "Media Hub",
    children: [
      { label: "Policies", href: Routes.Policies },
      { label: "Press Release", href: Routes.PressRelease },
      // temp: disable video page
      // { label: "Videos", href: Routes.Videos },
    ],
  },
  { label: "Legislation", href: Routes.LawsRegulations },
  { label: "New & Events", href: Routes.Aritcles },
  { label: "Cybersecurity Tips", href: Routes.CybersecurityTips },
];

interface RouteType {
  href?: string;
  label: string;
  children?: RouteType[];
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

export const getContentUrl = (
  entry: CollectionEntry<"articles" | "cybersecurity-tips">,
  lang: SupportedLanguage,
) => {
  const baseUrl = getRelativeLocaleUrl(lang);
  const slug = removeLanguagePrefix(entry.slug, lang);

  const articlePath = Routes.Aritcles.replace(/^\//, "");
  const cybersecurityTipsPath = Routes.CybersecurityTips.replace(/^\//, "");

  const urlGenerators = {
    articles: () => `${baseUrl}${articlePath}/${slug}`,
    "cybersecurity-tips": () => `${baseUrl}${cybersecurityTipsPath}/${slug}`,
  };

  const generator = urlGenerators[entry.collection];
  if (generator) {
    return generator();
  }

  throw new Error(`Unsupported collection: ${entry.collection}`);
};
