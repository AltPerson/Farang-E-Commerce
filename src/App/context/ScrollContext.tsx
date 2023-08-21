import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export interface IScrollContext {
  scrollOverHeight: boolean;
  setScrollOverHeight: Dispatch<SetStateAction<boolean>>;
}

export const ScrollContext = createContext<IScrollContext>({
  scrollOverHeight: false,
  setScrollOverHeight: () => {},
});

export default function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollOverHeight, setScrollOverHeight] = useState(false);
  return (
    <ScrollContext.Provider value={{ scrollOverHeight, setScrollOverHeight }}>
      {children}
    </ScrollContext.Provider>
  );
}
