import css from './HomePage.module.css';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.homeWrapper}>
      <h1 className={css.mainTitle}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className={css.link} to="/cars">
        View Catalog
      </Link>
    </div>
  );
};

export default HomePage;
