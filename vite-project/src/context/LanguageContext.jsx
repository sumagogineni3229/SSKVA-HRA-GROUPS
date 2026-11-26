
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("kalavedika-language") || "te";
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("kalavedika-language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  // Pass Telugu and English text wherever you use this function.
  const t = (content) => {
    if (typeof content === "string") return content;
    return content?.[language] || content?.te || "";
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
