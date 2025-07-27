import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

const Header = () => {
  return (
    <div className={css.headeContainer}>
      <header className={css.header}>
        <Logo />
        <HeaderNavigation />
      </header>
    </div>
  );
};

export default Header;
