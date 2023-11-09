import styles from './Layout.module.scss';
import { FC, useContext } from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR, useLocation, useNavigate } from 'react-router-dom';
import { header } from 'Data/translation/header';
import { TranslateContext } from 'App/context/translateContext';

interface IProps {
  toggleModal: () => void;
}

const Layout: FC<IProps> = ({ toggleModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useContext(TranslateContext);
  return (
    <div className={styles.Layout}>
      <div className={styles.Close} onClick={() => toggleModal()}>
        x
      </div>
      <div className={styles.List}>
        <ul>
          <li>
            <LinkS
              href="#"
              offset={-100}
              to="intro"
              spy={true}
              smooth={true}
              onClick={(e) => {
                if (location.pathname === '/') toggleModal();
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    e.target.click();
                    toggleModal();
                  }, 0);
                }
              }}
            >
              {header[language]['about']}
            </LinkS>
          </li>
          <li>
            <LinkR to="/products/all" onClick={() => toggleModal()}>
              {header[language]['clothes']}
            </LinkR>
          </li>
          <li>
            <LinkS
              href="#"
              offset={-70}
              to="feedback"
              spy={true}
              smooth={true}
              onClick={(e) => {
                if (location.pathname === '/') toggleModal();
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    e.target.click();
                    toggleModal();
                  }, 0);
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
                if (location.pathname === '/') toggleModal();
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    e.target.click();
                    toggleModal();
                  }, 0);
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
                if (location.pathname === '/') toggleModal();
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    e.target.click();
                    toggleModal();
                  }, 0);
                }
              }}
            >
              {header[language]['contacts']}
            </LinkS>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Layout;
