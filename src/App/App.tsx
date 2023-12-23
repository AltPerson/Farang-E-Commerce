import AppRouter from 'Components/Router/AppRouter';
import './styles/index.scss';
import Header from 'Components/Header/Header';
import Layout from 'Components/Layout/Layout';
import { useModal } from 'hooks/useModal';
import Footer from 'Components/Footer/Footer';
import { ScrollContext } from './context/ScrollContext';
import { useContext, useEffect } from 'react';
import UpAnchor from 'Components/UpAnchor/UpAnchor';
import { useLocation } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import CartModal from 'Components/CartModal/CartModal';

const App = () => {
  const { openModal, toggleModal } = useModal();
  const { cartIsOpen } = useContext(CartContext);
  const { setScrollOverHeight } = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 700) {
        setScrollOverHeight(false);
      } else {
        setScrollOverHeight(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollOverHeight]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      {openModal && <Layout toggleModal={toggleModal} />}
      {cartIsOpen && <CartModal />}
      <UpAnchor />
      <Header toggleModal={toggleModal} />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
