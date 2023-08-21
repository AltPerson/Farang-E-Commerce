import { ProductsContext } from 'App/context/ProductsContext';
import styles from './CartItem.module.scss';
import { ChangeEvent, FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  img: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  id: string;
  category: string;
  toggleCartModal: () => void;
}
const CartItem: FC<IProps> = ({
  img,
  title,
  size,
  price,
  quantity,
  id,
  category,
  toggleCartModal,
}) => {
  const navigate = useNavigate();
  const { setProductItem } = useContext(ProductsContext);
  const cancelHandler = () => {
    setProductItem((prev) => {
      return [...prev.filter((product) => product.id !== id)];
    });
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;
    setProductItem((prev) => {
      return [
        ...prev.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity:
                Number(e.target.value) === 0 ? 1 : Number(e.target.value),
            };
          }
          return product;
        }),
      ];
    });
  };
  const changeQuantity = (action: string) => {
    if (action === 'increase') {
      setProductItem((prev) => {
        return [
          ...prev.map((product) => {
            if (product.id === id) {
              let productQuantity = product.quantity;
              return {
                ...product,
                quantity: ++productQuantity,
              };
            }
            return product;
          }),
        ];
      });
    } else {
      setProductItem((prev) => {
        return [
          ...prev.map((product) => {
            if (product.id === id) {
              let productQuantity = product.quantity;
              return {
                ...product,
                quantity: --productQuantity,
              };
            }
            return product;
          }),
        ];
      });
    }
  };
  return (
    <div className={styles.CartItem}>
      <div className={styles.CartImage}>
        <img
          src={img}
          alt="img"
          onClick={() => {
            navigate(`/products/${category}/${id}`);
            toggleCartModal();
          }}
        />
        <span>
          {title}
          {size && `- ${size}`}
        </span>
      </div>
      <div className={styles.CartQuantity}>
        <span>${price.toFixed(2)}</span>
        <div className={styles.CartQuantityCounter}>
          <span
            className={`${styles.CounterMinus} ${
              quantity === 1 && styles.Disabled
            }`}
            onClick={() => quantity > 1 && changeQuantity('decrease')}
          >
            -
          </span>
          <input
            type="text"
            min={1}
            pattern="[1-9]*"
            onChange={handleInput}
            className={styles.CounterQuantity}
            value={quantity}
          />
          <span
            className={styles.CounterPlus}
            onClick={() => changeQuantity('increase')}
          >
            +
          </span>
          <span className={styles.CounterCancel} onClick={cancelHandler}>
            x
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
