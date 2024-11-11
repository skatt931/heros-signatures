import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ua from "./locales/ua.json";
import cz from "./locales/cz.json";

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
      cz: { translation: cz },
    },
    lng: "cz",
    fallbackLng: "cz",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
