import React, { createContext, useState } from 'react';

interface Language {
  [key: string]: string | Language;
}

type MapType<T> = keyof T;

export interface LanguageContext {
  languages: Language;
  currentLanguageKey: MapType<Language>;
  currentLanguage: Language;
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
  defaultLanguage: MapType<Language>;
}

export const Languages: React.FC<LanguageProviderProps> = ({
  children,
  languages,
  defaultLanguage,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<MapType<Language>>(
    defaultLanguage
  );

  const value: LanguageContext = {
    languages,
    currentLanguageKey: currentLanguage,
    // @ts-ignore
    currentLanguage: languages[currentLanguage],
    setCurrentLanguage,
    availableLanguages: Object.keys(languages),
  };

  return <Provider value={value}>{children}</Provider>;
};
