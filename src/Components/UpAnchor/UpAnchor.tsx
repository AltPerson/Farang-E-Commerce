import styles from './UpAnchor.module.scss';
import { FC, useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import upImage from 'Assets/images/footer/up.png';
import { ScrollContext } from 'App/context/ScrollContext';

const UpAnchor: FC = () => {
  const { scrollOverHeight } = useContext(ScrollContext);
  return (
    scrollOverHeight && (
      <span className={styles.UpImage} onClick={() => scroll.scrollToTop()}>
        <img src={upImage} alt="up" />
      </span>
    )
  );
};
export default UpAnchor;
