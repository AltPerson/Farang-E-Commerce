import styles from './Product.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  id: string;
  img: string;
  title: string;
  price: number;
  category: string;
}

const ProductWrapper: FC<IProps> = ({ id, img, title, price, category }) => {
  return (
    <div className={styles.Product}>
      <Link to={`/products/${category}/${id}`}>
        <div className={styles.ProductImg}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.ProductInfo}>
          <h3>{title}</h3>
          <h5>{`$${price.toFixed(2)}`}</h5>
        </div>
      </Link>
    </div>
  );
};
export default ProductWrapper;
