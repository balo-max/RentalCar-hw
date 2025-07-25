import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <HeaderNavigation />
    </header>
  );
};

export default Header;
