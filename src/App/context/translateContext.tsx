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
  language: 'ua',
  setLanguage: () => {},
});

export default function TranslateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState('ua');
  return (
    <TranslateContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
}
