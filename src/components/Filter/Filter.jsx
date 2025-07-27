import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectBrands, selectFilters } from '../../redux/filters/selectors';
import { nanoid } from 'nanoid';

import { GrPowerReset } from 'react-icons/gr';
import {
  changeBrandFilter,
  changeMaxMileageFilter,
  changeMinMileageFilter,
  changePriceFilter,
  resetFilters,
  submitFiltres,
} from '../../redux/filters/slice';

const Filter = () => {
  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);
  const price = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

  const dispatch = useDispatch();

  const handleChangeBrand = event => {
    dispatch(changeBrandFilter(event.target.value));
  };

  const handleChangePrice = event => {
    dispatch(changePriceFilter(event.target.value));
  };

  const handleChangeMinMileage = event => {
    dispatch(changeMinMileageFilter(event.target.value));
  };

  const handleChangeMaxMileage = event => {
    dispatch(changeMaxMileageFilter(event.target.value));
  };

  const handleSubmit = () => {
    dispatch(submitFiltres());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    // SELECT BRAND
    <div className={css.filterWrapper}>
      <div className={css.selectWrapper}>
        <label className={css.label} htmlFor="car-band">
          Car brand
        </label>
        <select
          className={css.select}
          name="car-band"
          id="car-band"
          value={filters.brand}
          onChange={handleChangeBrand}
        >
          <option value="">Choose a brand</option>
          {brands.map(brand => (
            <option key={nanoid()} value={brand}>
              {brand}
            </option>
          ))}
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
      {/* SELECT PRICE */}
      <div className={css.selectWrapper}>
        <label className={css.label} htmlFor="choose-price">
          Price/ 1 hour
        </label>
        <select
          className={css.select}
          name="choose-price"
          id="choose-price"
          value={filters.rentalPrice}
          onChange={handleChangePrice}
        >
          <option value="">Choose a price</option>
          {price.map(pr => (
            <option key={nanoid()} value={pr}>
              {pr}
            </option>
          ))}
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
      {/* INPUT MILEAGE */}
      <div className={css.inputWrapper}>
        <label className={css.label} htmlFor="car-mileage">
          Сar mileage / km
        </label>
        <div>
          <input
            className={css.inputFirst}
            id="car-mileage"
            name="from-mileage"
            type="number"
            placeholder="From"
            value={filters.minMileage || ''}
            onChange={handleChangeMinMileage}
          />
          <input
            className={css.inputSecond}
            id="to-car-mileage"
            name="to-mileage"
            type="number"
            placeholder="To"
            value={filters.maxMileage || ''}
            onChange={handleChangeMaxMileage}
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit} className={css.btnSearch}>
        Search
      </button>

      {Object.keys(filters).length > 0 && (
        <button
          type="submit"
          onClick={handleResetFilters}
          className={css.btnReset}
        >
          <GrPowerReset />
        </button>
      )}
    </div>
  );
};

export default Filter;
