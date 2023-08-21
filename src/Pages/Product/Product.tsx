import { totalData } from 'Data/totalData';
import styles from './Product.module.scss';
import { FC, useContext, useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { ProductItem, ProductsData } from 'App/types/types';
import Container from 'Components/Container/Container';
import Button from 'Components/Button/Button';
import ProductsSlider from 'Components/ProductsSlider/ProductsSlider';
import Back from 'Components/BackHome/Back';
import { useModal } from 'hooks/useModal';
import ImageScaler from 'Components/ImageScaler/ImageScaler';
import { useCartModal } from 'hooks/useCartModal';
import { ProductsContext } from 'App/context/ProductsContext';
import { product } from 'Data/translation/product';
import { TranslateContext } from 'App/context/translateContext';

const Product: FC = () => {
  const { category, id } = useParams();
  const [mainPage, setMainPage] = useState(0);
  const { openModal, toggleModal } = useModal();
  const location = useLocation();
  const { toggleCartModal } = useCartModal();
  const { setProductItem } = useContext(ProductsContext);
  const productList: ProductsData[] = totalData[category];
  const productItem: ProductsData =
    productList && productList.filter((p) => p.id === id).pop();
  const otherProductsList: ProductsData[] =
    productList && productList.filter((p) => p.id !== id);
  const { language } = useContext(TranslateContext);

  useEffect(() => {
    setMainPage(0);
  }, [location.pathname]);

  return (
    <section className={styles.Product}>
      {openModal && (
        <ImageScaler imgs={productItem.imgs} toggleModal={toggleModal} />
      )}
      {productItem !== undefined && productList !== undefined && (
        <Back path="/products/all" text={product[language]['back']} />
      )}
      {productItem === undefined ? (
        <div className={styles.CategoryUndefined}>
          <span>{product[language]['notFound']}</span>
          <br />
          <Link to={`/products/${category}`}>
            {product[language]['select']}
          </Link>
        </div>
      ) : productList === undefined ? (
        <div className={styles.CategoryUndefined}>
          <span>{product[language]['notFound2']}</span>
          <br />
          <Link to="/products/all">{product[language]['select2']}</Link>
        </div>
      ) : (
        <Container>
          <div className={styles.Wrapper}>
            <h1 className={styles.Title}>{productItem.title[language]}</h1>
            <div className={styles.ProductInfo}>
              <div className={styles.ImagesWrapper}>
                <div className={styles.MainPicture}>
                  <img
                    src={productItem.imgs[mainPage]}
                    alt="mainPage"
                    onClick={toggleModal}
                  />
                </div>
                <div className={styles.ExtraPicture}>
                  {productItem.imgs.map((img, index) => (
                    <div
                      key={`product-img-${img}`}
                      onMouseEnter={() => setMainPage(index)}
                    >
                      <img src={img} alt={'productImg'} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.InfoWrapper}>
                <p>{productItem.description[language]}</p>
                <form
                  className={`${styles.BuyWrapper} ${
                    productItem.sizeList ? styles.FlexTwo : styles.FlexOne
                  }`}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const productItemObject: ProductItem = {
                      id: productItem.id,
                      title: {
                        en: productItem.title['en'],
                        ua: productItem.title['ua'],
                      },
                      img: productItem.imgs[0],
                      size: '' || e.target[0].value,
                      price: productItem.price,
                      quantity: 1,
                      category: productItem.category,
                    };
                    setProductItem((prev) => {
                      if (
                        prev.length >= 1 &&
                        prev.some(
                          (product) => product.id === productItemObject.id,
                        )
                      ) {
                        return [
                          ...prev.map((product) => {
                            if (product.id === productItem.id) {
                              let productQuantity = product.quantity;
                              return {
                                ...product,
                                quantity: ++productQuantity,
                              };
                            }
                            return product;
                          }),
                        ];
                      }
                      return [...prev, productItemObject];
                    });
                    toggleCartModal();
                  }}
                >
                  {productItem.sizeList && (
                    <div className={styles.SizesWrapper}>
                      <select name="sizes" id="sizes">
                        {productItem.sizeList.map((size, index) => (
                          <option
                            key={`size-${size}-${index}`}
                            value={size.size}
                            disabled={size.quantity < 1}
                          >
                            {`${size.size} ${
                              size.quantity === 1
                                ? product[language]['sizeLast']
                                : size.quantity === 0
                                ? product[language]['sizeEnd']
                                : ''
                            }`}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className={styles.ButtonBuyWrapper}>
                    <span>${productItem.price.toFixed(2)}</span>
                    <Button text={product[language]['button']} />
                  </div>
                </form>
              </div>
            </div>

            <div className={styles.OthersProducts}>
              <h3 className={styles.Title}>
                {product[language]['otherProducts']}
              </h3>
              <ProductsSlider data={otherProductsList} />
            </div>
          </div>
        </Container>
      )}
    </section>
  );
};
export default Product;
