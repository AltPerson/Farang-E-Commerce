import Container from 'Components/Container/Container';
import styles from './Products.module.scss';
import { FC, useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProductsWrapper from 'Components/ProductsWrapper/ProductsWrapper';
import Button from 'Components/Button/Button';
import { getCategories } from 'Utils/getCategories';
import { totalData } from 'Data/totalData';
import Back from 'Components/BackHome/Back';
import { products } from 'Data/translation/products';
import { TranslateContext } from 'App/context/translateContext';

const Products: FC = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryList = useMemo<string[]>(getCategories, []);
  const isCategoryExist = categoryList.includes(category);
  const { language } = useContext(TranslateContext);
  return (
    <main className={styles.Products}>
      <Back path="/" text={products[language]['back']} />
      <Container>
        <div className={styles.Wrapper}>
          <div className={styles.Title}>
            <h1>
              {isCategoryExist
                ? products[language][category].toUpperCase()
                : products[language]['categoryExist']}
            </h1>
          </div>
          <div className={styles.Selector}>
            {categoryList.map((category) => (
              <Button
                key={`button-category-${category}`}
                text={products[language][category]}
                onClick={() => navigate(`/products/${category}`)}
              />
            ))}
          </div>
          {isCategoryExist ? (
            <ProductsWrapper data={totalData[category]} />
          ) : (
            <div className={styles.ErrorInfo}>
              <h1>{products[language]['categorySelect']}</h1>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};
export default Products;
