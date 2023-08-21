import { ProductItem } from 'App/types/types';

export function sumOfProducts(products: ProductItem[]): string {
  let sum = 0;
  products.forEach((product) => {
    sum += product.price * product.quantity;
  });
  return sum.toFixed(2).toString();
}
