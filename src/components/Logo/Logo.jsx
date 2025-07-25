import css from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="" to="/">
      <svg className={css.logoIcon} width="104" height="16">
        <use href="../../../public/sprite.svg#icon-Logo"></use>
      </svg>
    </Link>
  );
};

export default Logo;
