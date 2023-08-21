import { ProductItem } from 'App/types/types';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export interface ProductsContext {
  products: ProductItem[] | [];
  setProductItem: Dispatch<SetStateAction<ProductItem[]>>;
}

export const ProductsContext = createContext<ProductsContext>({
  products: [],
  setProductItem: () => {},
});

export default function ProductsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProductItem] = useState<ProductItem[] | []>([]);
  return (
    <ProductsContext.Provider value={{ products, setProductItem }}>
      {children}
    </ProductsContext.Provider>
  );
}
