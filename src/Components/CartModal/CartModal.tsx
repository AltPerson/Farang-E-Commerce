import styles from './CartModal.module.scss';
import { FC, useContext, useEffect } from 'react';
import { useCartModal } from 'hooks/useCartModal';
import { ProductsContext } from 'App/context/ProductsContext';
import CartItem from './CartItem/CartItem';
import { ProductItem } from 'App/types/types';
import { sumOfProducts } from 'Utils/sumOfProducts';
import { Link } from 'react-router-dom';
import { cartModal } from 'Data/translation/cartModal';
import { TranslateContext } from 'App/context/translateContext';

const CartModal: FC = () => {
  const { toggleCartModal } = useCartModal();
  const { products } = useContext(ProductsContext);
  const { language } = useContext(TranslateContext);
  useEffect(() => {
    return () => {
      localStorage.setItem('products', JSON.stringify(products));
      window.scrollTo(0, 0);
    };
  });
  return (
    <div
      className={styles.CartModal}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        target.id === 'cartModal' && toggleCartModal();
      }}
      id="cartModal"
    >
      <div className={styles.Close} onClick={toggleCartModal}>
        x
      </div>
      {products.length === 0 ? (
        <div className={styles.EmptyBasket}>
          <span>{cartModal[language]['emptyTitle']}</span>
          <span>
            <Link
              onClick={toggleCartModal}
              to="/products/all"
              className={styles.EmptyLink}
            >
              {cartModal[language]['emptyTitleLink']}
            </Link>
            {cartModal[language]['emptyTitle2']}
          </span>
        </div>
      ) : (
        <div className={styles.CartWrapper}>
          <div className={styles.CartList}>
            {products.map((product: ProductItem) => (
              <CartItem
                img={product.img}
                price={product.price}
                quantity={product.quantity}
                size={product.size}
                title={product.title[language]}
                key={product.id}
                id={product.id}
                category={product.category}
                toggleCartModal={toggleCartModal}
              />
            ))}
          </div>
          <div className={styles.CartBottom}>
            <div className={styles.CartNote}>
              <h5>{cartModal[language]['note']}</h5>
              <textarea rows={3} />
            </div>
            <div className={styles.CartCheckout}>
              <span>{cartModal[language]['total']}</span>
              <span>{sumOfProducts(products)}</span>
              <div className={styles.CartButtons}>
                <button onClick={toggleCartModal}>
                  {cartModal[language]['buttonContinue']}
                </button>
                <button>{cartModal[language]['buttonCheckout']}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartModal;
