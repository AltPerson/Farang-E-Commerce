import styles from './ProductsWrapper.module.scss';
import { FC, useContext } from 'react';
import { ProductsData } from 'App/types/types';
import ProductWrapper from './ProductWrapper/ProductWrapper';
import { TranslateContext } from 'App/context/translateContext';

interface IProps {
  data: ProductsData[];
}
const ProductsWrapper: FC<IProps> = ({ data }) => {
  const { language } = useContext(TranslateContext);
  return (
    <div className={styles.Products}>
      {data.map((product) => (
        <ProductWrapper
          id={product.id}
          key={`product-${product.id}`}
          img={product.imgs[0]}
          price={product.price}
          title={product.title[language]}
          category={product.category}
        />
      ))}
    </div>
  );
};
export default ProductsWrapper;
