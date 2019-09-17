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
  replacements?: Replacements | null
}

export function Translator({ children, replacements }: TranslatorProps) {
  const { currentLanguage } = useContext<LanguageContext>(languageContext);
  let text = get(currentLanguage, children, children);

  if (replacements) {
    text = replace(text, replacements);
  }

  return text;
}
