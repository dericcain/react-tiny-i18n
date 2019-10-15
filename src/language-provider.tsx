import React, { createContext, useState } from 'react';

interface Language {
  [key: string]: string | Language;
}

export interface LanguageContext {
  languages: Language;
  currentLanguageKey: string;
  currentLanguage: Language | string;
  setCurrentLanguage: (language: string) => void;
  availableLanguages: string[];
}

export const languageContext = createContext<LanguageContext>(
  {} as LanguageContext
);

const { Provider } = languageContext;

interface LanguageProviderProps {
  children: React.ReactNode;
  languages: Language;
  defaultLanguage: string;
}

export const Languages: React.FC<LanguageProviderProps> = ({
  children,
  languages,
  defaultLanguage,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    defaultLanguage
  );

  const value: LanguageContext = {
    languages,
    currentLanguageKey: currentLanguage,
    currentLanguage: typeof languages == 'object' ? languages[currentLanguage] : languages,
    setCurrentLanguage,
    availableLanguages: Object.keys(languages),
  };

  return <Provider value={value}>{children}</Provider>;
};
