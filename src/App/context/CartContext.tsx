import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export interface ICartContext {
  cartIsOpen: boolean;
  setCartIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<ICartContext>({
  cartIsOpen: false,
  setCartIsOpen: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <CartContext.Provider value={{ cartIsOpen, setCartIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}
