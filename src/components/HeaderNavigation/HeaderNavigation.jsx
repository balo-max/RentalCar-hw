import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './HeaderNavigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const HeaderNavigation = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/" className={getLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/cars" className={getLinkStyles}>
        Catalog
      </NavLink>
    </div>
  );
};

export default HeaderNavigation;
