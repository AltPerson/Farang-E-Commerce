import Container from 'Components/Container/Container';
import styles from './Hero.module.scss';
import { FC, useContext } from 'react';
import Button from 'Components/Button/Button';
import Slider from 'Components/Slider/Slider';
import { sliderDataHero } from 'Data/sliderHeroData';
import { Link as LinkS } from 'react-scroll';
import { hero } from 'Data/translation/hero';
import { TranslateContext } from 'App/context/translateContext';

const Hero: FC = () => {
  const { language } = useContext(TranslateContext);
  return (
    <section className={styles.Hero}>
      <Container>
        <div className={styles.Wrapper}>
          <div className={styles.Title}>
            <h1>{hero[language]['title']}</h1>
            <h2>{hero[language]['subtitle']}</h2>
          </div>
          <Slider sliderData={sliderDataHero[language]} />
          <div className={styles.ButtonWrapper}>
            <LinkS offset={-100} to="sales" spy={true} smooth={true} href="#">
              <Button text={hero[language]['button']}></Button>
            </LinkS>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
