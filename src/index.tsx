import App from 'App/App';
import ScrollProvider from 'App/context/ScrollContext';
import CartProvider from 'App/context/CartContext';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from 'App/context/ProductsContext';
import TranslateProvider from 'App/context/translateContext';

const container = document.getElementById('root') as HTMLElement;
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <ScrollProvider>
        <CartProvider>
          <ProductsProvider>
            <TranslateProvider>
              <App />
            </TranslateProvider>
          </ProductsProvider>
        </CartProvider>
      </ScrollProvider>
    </BrowserRouter>,
  );
}
