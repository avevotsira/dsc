import { defaultLang, ui } from "./ui";

export function useTranslations(lang: keyof typeof ui = "en") {
  const validLang = lang in ui ? lang : "en";
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[validLang][key] || ui[defaultLang][key];
  };
}
