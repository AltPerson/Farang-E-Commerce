import styles from './Back.module.scss';
import { FC } from 'react';
import back from 'Assets/images/common/back.svg';
import { Link } from 'react-router-dom';

interface IProps {
  path: string;
  text: string;
}
const Back: FC<IProps> = ({ path, text }) => {
  return (
    <div className={styles.Back}>
      <Link to={path}>
        <img src={back} alt="back" />
        <span>{text}</span>
      </Link>
    </div>
  );
};
export default Back;
