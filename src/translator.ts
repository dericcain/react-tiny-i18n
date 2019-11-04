import { useContext } from 'react';

import { LanguageContext, languageContext } from './language-provider';
import { get } from './get';

function replace(string: string, replacements: { [k: string]: string }) {
  let newString = string;

  Object.keys(replacements).forEach(key => {
    newString = newString.replace(`{{${key}}}`, replacements[key]);
  });

  return newString;
}

interface Replacements {
  [k: string]: string;
}

interface TranslatorProps {
  children: string;
  replacements?: Replacements;
}

interface InterpolationCache {
  [key: string]: string;
}

const cache: InterpolationCache = {};

export function Translator({ children, replacements = {} }: TranslatorProps) {
  const { currentLanguage } = useContext<LanguageContext>(languageContext);
  let text;

  const key = `${children}.${Object.values(replacements).join('.')}`;

  if (key in cache) {
    return cache[key];
  }

  // This allows nesting keys deeper than one level
  if (typeof currentLanguage === 'string') {
    text = currentLanguage;
  } else {
    text = get(currentLanguage, children, children);
  }

  if (replacements) {
    text = replace(text, replacements);
  }

  if (text !== children) {
    cache[key] = text;
  }

  return text;
}

// Create a way to use the translator outside of a React component
export function t(path: string, replacements: Replacements = {}): string {
  return Translator({ children: path, replacements });
}
