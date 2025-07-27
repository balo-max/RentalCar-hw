import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundWrapper}>
      <div>
        Page not found, please go to the{' '}
        <Link className={css.notFoundLink} to="/">
          home page
        </Link>
        .{' '}
      </div>
    </div>
  );
};

export default NotFoundPage;
