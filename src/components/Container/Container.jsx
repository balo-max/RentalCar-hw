import css from './Container.module.css';
import clsx from 'clsx';

const Container = ({ children, noPadding = false }) => {
  return (
    <div className={clsx(css.container, noPadding && css.noPadding)}>
      {children}
    </div>
  );
};

export default Container;
