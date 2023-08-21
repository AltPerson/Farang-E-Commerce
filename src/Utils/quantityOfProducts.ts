import { ProductItem } from 'App/types/types';

export function quantityOfProducts(products: ProductItem[]): string {
  if (products.length === 0) return '0';
  return products
    .reduce((acc, product) => acc + product.quantity, 0)
    .toString();
}
