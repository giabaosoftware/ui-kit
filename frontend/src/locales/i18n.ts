import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { vi } from "./vi";
const savedLang = localStorage.getItem("app_language") || "vi";

i18n.use(initReactI18next).init({
  resources: {
    en,
    vi,
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
