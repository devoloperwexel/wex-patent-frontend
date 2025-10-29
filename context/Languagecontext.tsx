"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export interface LanguageContextType {
  language: string;
  toggleLanguage: (language: string) => void;
}

// Create the context with a default value
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("EN");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang === "EN" || lang === "DE") {
      setLanguage(lang);
    }
  }, []);

  const toggleLanguage = (language: string) => {
    localStorage.setItem("lang", language);
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
