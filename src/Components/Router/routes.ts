import { lazy } from 'react';

const Main = lazy(() => import('Pages/Main/Main'));
const Products = lazy(() => import('Pages/Products/Products'));
const Product = lazy(() => import('Pages/Product/Product'));
export const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/products/:category',
    component: Products,
  },
  {
    path: '/products/:category/:id',
    component: Product,
  },
];
