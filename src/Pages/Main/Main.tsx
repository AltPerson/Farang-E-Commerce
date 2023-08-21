import Hero from 'Components/Sections/Hero/Hero';
import styles from './Main.module.scss';
import { FC } from 'react';
import Intro from 'Components/Sections/Intro/Intro';
import Feedbacks from 'Components/Sections/Feedbacks/Feedbacks';
import Advantages from 'Components/Sections/Advantages/Advantages';
import Location from 'Components/Sections/Location/Location';
import TopSales from 'Components/Sections/TopSales/TopSales';

const Main: FC = () => {
  return (
    <main className={styles.Main}>
      <Hero />
      <Intro />
      <TopSales />
      <Feedbacks />
      <Advantages />
      <Location />
    </main>
  );
};
export default Main;
