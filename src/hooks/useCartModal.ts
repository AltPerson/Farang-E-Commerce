import { CartContext } from 'App/context/CartContext';
import { useContext } from 'react';

export function useCartModal() {
  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);
  const toggleCartModal = () => {
    setCartIsOpen(!cartIsOpen);
    document.body.style.overflowY = cartIsOpen ? 'auto' : 'hidden';
  };
  return { cartIsOpen, toggleCartModal };
}
