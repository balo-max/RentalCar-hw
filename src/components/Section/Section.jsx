import css from './Section.module.css';
import clsx from 'clsx';

const Section = ({ children, noPadding = false }) => {
  return (
    <section className={clsx(css.section, noPadding && css.noPadding)}>
      {children}
    </section>
  );
};

export default Section;
