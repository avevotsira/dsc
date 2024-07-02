import { languages, type SupportedLanguage } from "@/i18n/ui";
import { navigate } from "astro:transitions/client";
import enIcon from "src/static/lang-icon/en.svg";
import kmIcon from "src/static/lang-icon/km.svg";

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

  const langImages = {
    en: kmIcon,
    km: enIcon,
  };
  const icon = langImages[initialLocale];

  return (
    <button onClick={toggleLanguage} type="button" aria-label="Toggle language">
      <img src={icon.src} width="26" alt="" />
    </button>
  );
};

export default LanguageSwitcher;
