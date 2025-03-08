import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import pt from "./locales/pt/common.json";
import es from "./locales/es/common.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
    es: { translation: es },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

// 🔹 Garante que `i18next` está acessível no console do navegador
if (typeof window !== "undefined") {
  window.i18next = i18next;
}

export default i18next;
