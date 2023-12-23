import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export interface ITranslateContext {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

export const TranslateContext = createContext<ITranslateContext>({
  language: '',
  setLanguage: () => {},
});

export default function TranslateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem('language') !== null
      ? window.localStorage.getItem('language')
      : 'ua';
  });
  return (
    <TranslateContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
}
