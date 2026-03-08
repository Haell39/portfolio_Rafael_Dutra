import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback to key if not found
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
