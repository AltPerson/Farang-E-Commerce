import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import styles from './AppRoute.module.scss';
import Page404 from 'Pages/Page404/Page404';
import Loader from 'Components/Loader/Loader';

const AppRouter: FC = () => {
  return (
    <Suspense
      fallback={
        <div className={styles.LoadingLogo}>
          <div className={styles.Wrapper}>
            <Loader />
          </div>
        </div>
      }
    >
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
