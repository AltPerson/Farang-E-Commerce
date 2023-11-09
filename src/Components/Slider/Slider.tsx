import styles from './Slider.module.scss';
import { FC, useState, useEffect } from 'react';
import { SliderData } from 'App/types/types';
import leftArrow from 'Assets/images/hero/slider/left.png';
import rightArrow from 'Assets/images/hero/slider/right.png';

interface IProps {
  sliderData: SliderData[];
}

const Slider: FC<IProps> = ({ sliderData }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderHandler = (move: string) => {
    if (move === 'left') {
      if (sliderIndex <= 0) {
        setSliderIndex(sliderData.length - 1);
      } else {
        setSliderIndex((prev) => (prev -= 1));
      }
    } else {
      if (sliderIndex >= sliderData.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex((prev) => (prev += 1));
      }
    }
  };

  useEffect(() => {
    setSliderIndex(0);
  }, [sliderData.length]);
  return (
    <div className={styles.Slider}>
      <div className={styles.LeftArrow} onClick={() => sliderHandler('left')}>
        <img src={leftArrow} alt="leftArrow" />
      </div>
      <div className={styles.MainContent}>
        <div className={styles.MainContentInfo}>
          <h1>{sliderData[sliderIndex].title}</h1>
          <p>{sliderData[sliderIndex].txt}</p>
        </div>
        <div className={styles.MainContentImage}>
          <img src={sliderData[sliderIndex].img} alt="sliderImg" />
        </div>
      </div>
      <div className={styles.rightArrow} onClick={() => sliderHandler('right')}>
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </div>
  );
};
export default Slider;
