import styles from './ImageScaler.module.scss';
import { FC, KeyboardEvent, useState, useEffect, useRef } from 'react';

interface IProps {
  imgs: string[];
  toggleModal: () => void;
}
const ImageScaler: FC<IProps> = ({ imgs, toggleModal }) => {
  const [image, setImage] = useState(0);
  const divRef = useRef<HTMLDivElement>();
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft':
        setImage((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
        break;
      case 'ArrowRight':
        setImage((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
        break;
      case 'Escape':
        toggleModal();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (divRef) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div
      tabIndex={0}
      className={styles.ImageScaler}
      onKeyDown={handleKeyDown}
      ref={divRef}
    >
      <div className={styles.Close} onClick={toggleModal}>
        x
      </div>
      <div className={styles.ImageWrapper}>
        <div className={styles.LeftArrow}>
          <span
            onClick={() => {
              setImage((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
            }}
          >
            {'<'}
          </span>
        </div>
        <div className={styles.MainImage}>
          <img src={imgs[image]} alt="mainImage" />
        </div>
        <div className={styles.RightArrow}>
          <span
            onClick={() => {
              setImage((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
            }}
          >
            {'>'}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ImageScaler;
