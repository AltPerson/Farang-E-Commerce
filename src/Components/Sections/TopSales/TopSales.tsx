import Container from 'Components/Container/Container';
import styles from './TopSales.module.scss';
import { FC, useContext } from 'react';
import { shortsData } from 'Data/shortsData';
import { accessoriesData } from 'Data/accessoriesData';
import { hatsData } from 'Data/hatsData';
import ProductsWrapper from 'Components/ProductsWrapper/ProductsWrapper';
import { topSalesSection } from 'Data/translation/topSalesSection';
import { TranslateContext } from 'App/context/translateContext';

const TopSales: FC = () => {
  const { language } = useContext(TranslateContext);
  return (
    <section className={styles.TopSales} id="sales">
      <Container>
        <div className={styles.Wrapper}>
          <div className={styles.Title}>
            <h1>{topSalesSection[language]['title']}</h1>
          </div>
          <div className={styles.Selector}></div>
          <ProductsWrapper
            data={[...shortsData, ...hatsData, ...accessoriesData]}
          />
        </div>
      </Container>
    </section>
  );
};
export default TopSales;
