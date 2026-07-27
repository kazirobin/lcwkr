"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { translations } from './../data/index';
import type { Language } from "../types/language";

type ContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.bn;
};

const LanguageContext = createContext<ContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("bn");



  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error("useLanguage must be inside LanguageProvider");

  return context;
};