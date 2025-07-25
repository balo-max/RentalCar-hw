import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.filterWrapper}>
      <div className={css.selectWrapper}>
        <label className={css.label} htmlFor="car-band">
          Car brand
        </label>
        <select className={css.select} name="car-band" id="car-band">
          <option value="">Choose a brand</option>
        </select>
        <svg
          className={css.selectIcon}
          aria-hidden="true"
          width="16"
          height="16"
        >
          <use href="../../../public/sprite.svg#icon-arrow-down"></use>
        </svg>
      </div>
      <div className={css.selectWrapper}>
        <label className={css.label} htmlFor="choose-price">
          Price/ 1 hour
        </label>
        <select className={css.select} name="choose-price" id="choose-price">
          <option value="">Choose a price</option>
        </select>
        <svg
          className={css.selectIcon}
          aria-hidden="true"
          width="16"
          height="16"
        >
          <use href="../../../public/sprite.svg#icon-arrow-down"></use>
        </svg>
      </div>

      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="car-mileage">
          Сar mileage / km
        </label>
        <div>
          <input
            className={css.inputFirst}
            id="car-mileage"
            name="from-mileage"
            type="text"
            defaultValue={'From'}
          />
          <input
            className={css.inputSecond}
            id="to-car-mileage"
            name="to-mileage"
            type="text"
            defaultValue={'To'}
          />
        </div>
      </div>

      <button className={css.btnSearch}>Search</button>
    </div>
  );
};

export default Filter;
