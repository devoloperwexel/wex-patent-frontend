"use client";


import { LanguageContext, LanguageContextType } from "context/Languagecontext";
import { useContext } from "react";

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
