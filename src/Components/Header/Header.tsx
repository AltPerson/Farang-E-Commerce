import Container from 'Components/Container/Container';
import styles from './Header.module.scss';
import { FC, useContext } from 'react';
import basket from 'Assets/images/header/basket.png';
import burger from 'Assets/images/burger/burger.svg';
import Logo from 'Components/Logo/Logo';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR, useLocation, useNavigate } from 'react-router-dom';
import { ScrollContext } from 'App/context/ScrollContext';
import { useCartModal } from 'hooks/useCartModal';
import { ProductsContext } from 'App/context/ProductsContext';
import { sumOfProducts } from 'Utils/sumOfProducts';
import { quantityOfProducts } from 'Utils/quantityOfProducts';
import { header } from 'Data/translation/header';
import { TranslateContext } from 'App/context/translateContext';

interface IProps {
  toggleModal: () => void;
}

const Header: FC<IProps> = ({ toggleModal }) => {
  const { scrollOverHeight } = useContext(ScrollContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleCartModal } = useCartModal();
  const { products } = useContext(ProductsContext);
  const { language, setLanguage } = useContext(TranslateContext);
  return (
    <header className={styles.Header}>
      <Container>
        <div className={`${styles.Wrapper} ${scrollOverHeight && styles.Less}`}>
          <Logo />
          <nav className={styles.Navbar}>
            <ul>
              <li>
                <LinkS
                  offset={-100}
                  to="intro"
                  spy={true}
                  smooth={true}
                  href="#"
                  onClick={(e) => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        e.target.click();
                      });
                    }
                  }}
                >
                  {header[language]['about']}
                </LinkS>
              </li>
              <li>
                <LinkR to="/products/all">{header[language]['clothes']}</LinkR>
              </li>
              <li>
                <LinkS
                  href="#"
                  offset={-70}
                  to="feedback"
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        e.target.click();
                      });
                    }
                  }}
                >
                  {header[language]['reviews']}
                </LinkS>
              </li>
              <li>
                <LinkS
                  href="#"
                  offset={-120}
                  to="advantages"
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        e.target.click();
                      });
                    }
                  }}
                >
                  {header[language]['delivery']}
                </LinkS>
              </li>
              <li>
                <LinkS
                  href="#"
                  offset={-120}
                  to="contact"
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        e.target.click();
                      });
                    }
                  }}
                >
                  {header[language]['contacts']}
                </LinkS>
              </li>
            </ul>
          </nav>
          <div className={styles.Basket}>
            <div className={styles.BasketImg}>
              <img src={basket} alt="basket" onClick={toggleCartModal} />
              <span>{quantityOfProducts(products)}</span>
            </div>
            <div className={styles.BasketInfo}>
              <span>{header[language]['basketTotal']}</span>
              <span>{sumOfProducts(products)}$</span>
            </div>
            <div
              className={styles.Language}
              onClick={() => {
                setLanguage((prev) => (prev === 'ua' ? 'en' : 'ua'));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                  className={styles.languageIcon}
                />
              </svg>
              <span>{language}</span>
            </div>
          </div>
          <div className={styles.Burger} onClick={() => toggleModal()}>
            <img src={burger} alt="burger" />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
