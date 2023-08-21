import Container from 'Components/Container/Container';
import styles from './Footer.module.scss';
import { FC, useContext } from 'react';
import Logo from 'Components/Logo/Logo';
import youtube from 'Assets/images/footer/youtube.svg';
import instagram from 'Assets/images/footer/free.svg';
import twitter from 'Assets/images/footer/twitter.svg';
import facebook from 'Assets/images/footer/facebook.svg';
import site from 'Assets/images/footer/site.svg';
import { footer } from 'Data/translation/footer';
import { TranslateContext } from 'App/context/translateContext';

const Footer: FC = () => {
  const { language } = useContext(TranslateContext);
  return (
    <footer className={styles.Footer} id="contact">
      <Container>
        <div className={styles.Wrapper}>
          <Logo />
          <div className={styles.Copyright}>
            <span>{footer[language]['copyright1']}</span>
            <span>{footer[language]['copyright2']}</span>
            <a href="https://teamfarang.com">
              {footer[language]['link']}
              <img src={site} alt="site" />
            </a>
          </div>
          <div className={styles.Socials}>
            <a href="https://www.youtube.com/user/teamfarang">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://www.instagram.com/teamfarang">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://twitter.com/teamfarang">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.facebook.com/teamfarang">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
