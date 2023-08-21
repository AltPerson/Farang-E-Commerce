import { ProductsData } from 'App/types/types';
import styles from './ProductsSlider.module.scss';
import { FC, useState, useRef, useContext } from 'react';
import ProductWrapper from 'Components/ProductsWrapper/ProductWrapper/ProductWrapper';
import leftArrow from 'Assets/images/hero/slider/left.png';
import rightArrow from 'Assets/images/hero/slider/right.png';
import { TranslateContext } from 'App/context/translateContext';

interface IProps {
  data: ProductsData[];
}

interface ISliderArrows {
  isShowLeft: boolean;
  isShowRight: boolean;
  clientLeft: number;
}

const ProductsSlider: FC<IProps> = ({ data }) => {
  const { language } = useContext(TranslateContext);
  const sliderRefContainer = useRef<HTMLDivElement>();
  const [sliderArrows] = useState<ISliderArrows>({
    isShowLeft: true,
    isShowRight: true,
    clientLeft: 0,
  });
  const sliderClick = (side: string) => {
    const extraOffset =
      sliderRefContainer.current.offsetParent.clientWidth === 425 ? 13 : 12;
    const childNodes = sliderRefContainer.current
      .childNodes[0] as HTMLDivElement;

    if (side === 'left') {
      sliderRefContainer.current.scrollLeft -=
        childNodes.offsetWidth + extraOffset;
    } else {
      sliderRefContainer.current.scrollLeft +=
        childNodes.offsetWidth + extraOffset;
    }
  };
  return (
    <div className={styles.Wrapper}>
      <div
        className={`${styles.Navigation} ${
          data.length > 3
            ? styles.ShowArrows
            : data.length > 3
            ? styles.ShowLateArrows
            : data.length > 1
            ? styles.ShowLateArrows2
            : ''
        }`}
      >
        <img
          src={leftArrow}
          alt="leftArrow"
          className={sliderArrows.isShowLeft ? '' : styles.LeftArrow}
          onClick={() => sliderClick('left')}
        />
        <img
          src={rightArrow}
          alt="rightArrow"
          className={sliderArrows.isShowRight ? '' : styles.RightArrow}
          onClick={() => sliderClick('right')}
        />
      </div>
      <div className={styles.ProductsSlider} ref={sliderRefContainer}>
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
    </div>
  );
};
export default ProductsSlider;
