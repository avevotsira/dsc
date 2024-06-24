import { languages, type SupportedLanguage } from "@/i18n/ui";
import { navigate } from "astro:transitions/client";

const LanguageSwitcher = ({
  currentPath,
  initialLocale,
}: {
  currentPath: string;
  initialLocale: SupportedLanguage;
}) => {
  const toggleLanguage = () => {
    const locales = Object.keys(languages) as SupportedLanguage[];
    const currentIndex = locales.indexOf(initialLocale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex];

    const newPath = `/${newLocale}${currentPath.replace(/^\/[a-z]{2}/, "")}`;
    navigate(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-foreground hover:text-primary"
      type="button"
    >
      {languages[initialLocale]}
    </button>
  );
};

export default LanguageSwitcher;
