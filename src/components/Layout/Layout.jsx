import Section from '../Section/Section.jsx';
import Container from '../Container/Container.jsx';
import Header from '../Header/Header.jsx';
import Outlet from '../Outlet/Outlet.jsx';

import css from './Layout.module.css';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const noPadding = location.pathname === '/';

  return (
    <div className={css.flexBox}>
      <Header />

      <div className={css.outletBox}>
        <Section noPadding={noPadding}>
          <Container noPadding={noPadding}>
            <Outlet>{children}</Outlet>
          </Container>
        </Section>
      </div>
    </div>
  );
};

export default Layout;
