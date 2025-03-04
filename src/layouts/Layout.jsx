import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { Back } from '@/components/Back/Back';
// import { Menu } from '@/components/Menu/Menu';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && (
        <>
          <Back />
          {/* <Menu /> */}
        </>
      )}
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
