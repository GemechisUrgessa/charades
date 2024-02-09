import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './localization/en.json';
import am from './localization/am.json';
import or from './localization/or.json';
const language = localStorage.getItem("language") || "en";
i18n
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "am", "or"],
    fallbackLng: language,
    lng: language,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en,
      },
      am: {
        translation: am,
      },
      or : {
        translation: or,
      },
    },
  });

export default i18n;
