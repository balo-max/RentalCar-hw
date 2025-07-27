import css from './CarDetailDescription.module.css';
import { nanoid } from 'nanoid';

const CarDetailDescription = ({ car }) => {
  const city = car.address.split(' ')[3];
  const country = car.address.split(' ')[4];
  const accessories = car.accessories;

  return (
    <div>
      <div className={css.titleWrapper}>
        <h2 className={css.TitleCar}>
          {car.brand}&nbsp;
          <span className={css.TitleCarSpan}>{car.model}</span>, {car.year}
        </h2>
        <p className={css.TitelIdText}>Id: {car.id}</p>
      </div>
      <div>
        <div className={css.carLocationWrapper}>
          <div className={css.carLocation}>
            <svg aria-hidden="true" width="16" height="16">
              <use href="/sprite.svg#icon-Location"></use>
            </svg>
            <p>
              {city} {country}
            </p>
          </div>
          <p>Mileage: {car.mileage} km</p>
        </div>
        <div className={css.descWrapper}>
          <p className={css.carPrice}>${car.rentalPrice}</p>
          <p className={css.carDesc}>{car.description}</p>
        </div>
      </div>

      {/* Rental Conditions: */}
      <div>
        <h3 className={css.carSubTitle}>Rental Conditions:</h3>
        <ul className={css.descList}>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-check-circle"></use>
            </svg>
            {car.rentalConditions[0]}
          </li>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-check-circle"></use>
            </svg>
            {car.rentalConditions[2]}
          </li>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-check-circle"></use>
            </svg>
            {car.rentalConditions[1]}
          </li>
        </ul>
      </div>

      {/* Car Specifications: */}
      <div>
        <h3 className={css.carSubTitle}>Car Specifications:</h3>
        <ul className={css.descList}>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-calendar"></use>
            </svg>
            Year: {car.year}
          </li>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-car"></use>
            </svg>
            Type: {car.type}
          </li>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-fuel-pump"></use>
            </svg>
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li>
            <svg
              className={css.iconCheck}
              aria-hidden="true"
              width="16"
              height="16"
            >
              <use href="/sprite.svg#icon-gear"></use>
            </svg>
            Engine Size: {car.engineSize}
          </li>
        </ul>
      </div>

      {/* Accessories and functionalities */}
      <div>
        <h3 className={css.carSubTitle}>Accessories and functionalities:</h3>
        <ul className={css.descListAccessories}>
          {accessories.map(acs => (
            <li key={nanoid()}>
              <svg
                className={css.iconCheck}
                aria-hidden="true"
                width="16"
                height="16"
              >
                <use href="/sprite.svg#icon-check-circle"></use>
              </svg>
              {acs}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetailDescription;
