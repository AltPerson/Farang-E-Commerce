import styles from './Page404.module.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Page404: FC = () => {
  return (
    <div className={styles.Page404}>
      <div className={styles.Wrapper}>
        <h1 className={styles.Title}>Сторінку не знайдено</h1>
        <h3 className={styles.Back}>
          Повернутися на <Link to="/">головну</Link>
        </h3>
      </div>
    </div>
  );
};
export default Page404;
