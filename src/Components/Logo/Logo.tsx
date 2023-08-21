import styles from './Logo.module.scss';
import { FC } from 'react';
import logo from 'Assets/images/header/logo.png';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <div className={styles.Logo}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <span>Farang</span>
    </div>
  );
};
export default Logo;
