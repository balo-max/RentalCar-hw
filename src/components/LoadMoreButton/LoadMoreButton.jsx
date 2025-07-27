import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onChangePage }) => {
  return (
    <div className={css.btnWrapper}>
      <button
        type="submit"
        onClick={() => onChangePage()}
        className={css.loadMoreBtn}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
