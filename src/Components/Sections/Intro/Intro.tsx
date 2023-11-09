import Container from 'Components/Container/Container';
import styles from './Intro.module.scss';
import { FC, useContext } from 'react';
import Button from 'Components/Button/Button';
import img1 from 'Assets/images/intro/firstImage.webp';
import img2 from 'Assets/images/intro/secondImage.webp';
import img3 from 'Assets/images/intro/thirdImage.webp';
import { Element } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { introSection } from 'Data/translation/introSection';
import { TranslateContext } from 'App/context/translateContext';

const Intro: FC = () => {
  const { language } = useContext(TranslateContext);
  return (
    <Element name="IntroSection" id="intro">
      <section className={styles.Intro} id="intro">
        <Container>
          <div className={styles.Wrapper}>
            <div className={styles.Title}>
              <h1>{introSection[language]['title']}</h1>
              <h1>{introSection[language]['title2']}</h1>
            </div>
            <div className={styles.Info}>
              <div className={styles.InfoImages}>
                <div>
                  <img src={img1} alt="img-1" />
                </div>
                <div>
                  <img src={img2} alt="img-2" />
                </div>
                <div>
                  <img src={img3} alt="img-3" />
                </div>
              </div>
              <div className={styles.InfoText}>
                <p>{introSection[language]['info']}</p>
              </div>
            </div>
            <div className={styles.ButtonWrapper}>
              <LinkR to="/products/all">
                <Button text={introSection[language]['button']} />
              </LinkR>
            </div>
          </div>
        </Container>
      </section>
    </Element>
  );
};
export default Intro;
