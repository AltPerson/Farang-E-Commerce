import Container from 'Components/Container/Container';
import styles from './Advantages.module.scss';
import { FC, useContext } from 'react';
import fly from 'Assets/images/pros/jet.png';
import one from 'Assets/images/pros/onePone.png';
import map from 'Assets/images/pros/map.png';
import { advantagesSection } from 'Data/translation/advantagesSection';
import { TranslateContext } from 'App/context/translateContext';

const Advantages: FC = () => {
  const { language } = useContext(TranslateContext);
  return (
    <section className={styles.Advantages} id="advantages">
      <Container>
        <div className={styles.Wrapper}>
          <div className={styles.Title}>
            <h3>{advantagesSection[language]['title']}</h3>
          </div>
          <div className={styles.Info}>
            <p>
              <img src={fly} alt="fly" />
              <span>{advantagesSection[language]['fly']}</span>
            </p>
            <p>
              <img src={one} alt="one" />
              <span>{advantagesSection[language]['one']}</span>
            </p>
            <p>
              <img src={map} alt="map" />
              <span>{advantagesSection[language]['map']}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Advantages;
