import { Link } from 'react-router-dom';
import css from './CarCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCars, deleteFavoriteCars } from '../../redux/cars/slice';
import { selectFavoriteCars } from '../../redux/cars/selectors';

const CarCard = ({ car }) => {
  const city = car.address.split(' ')[3].replace(/,$/, '');
  const country = car.address.split(' ')[4];

  const pathId = `/cars/${car.id}`;

  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavoriteCars);

  const handleAddFavoriteCar = id => {
    dispatch(addFavoriteCars(id));
  };

  const handleDeleteFavoriteCar = id => {
    dispatch(deleteFavoriteCars(id));
  };

  return (
    <div className={css.cardWrapper}>
      <div className={css.leftWrapper}>
        {favoriteCars.find(id => id === car.id) ? (
          <button
            type="submit"
            onClick={() => handleDeleteFavoriteCar(car.id)}
            className={css.favoriteBtn}
          >
            <svg className={css.iconFavorite} width="16" height="16">
              <use href="/sprite.svg#icon-favorite"></use>
            </svg>
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => handleAddFavoriteCar(car.id)}
            className={css.favoriteBtn}
          >
            <svg className={css.iconAddFavorite} width="16" height="16">
              <use href="/sprite.svg#icon-add-favorite"></use>
            </svg>
          </button>
        )}
        <img
          className={css.cardImage}
          src={car.img}
          alt="car-image"
          width="276"
          height="268"
          loading="lazy"
        />
        <div className={css.cardTitleWrapper}>
          <h3 className={css.cardTitleCar}>
            {car.brand}&nbsp;
            <span className={css.cardTitleCarSpan}>{car.model}</span>,{' '}
            {car.year}
          </h3>
          <p className={css.cardPrice}>{car.rentalPrice}$</p>
        </div>
        <div className={css.cardDiscriptionWrapper}>
          <ul className={css.cardDiscriptionList}>
            <li className={css.cardDiscriptionItem}>{city}</li>
            <li className={css.cardDiscriptionItem}>{country}</li>
            <li className={css.cardDiscriptionItem}>{car.rentalCompany}</li>
          </ul>
          <ul className={css.cardDiscriptionList}>
            <li className={css.cardDiscriptionItem}>{car.type}</li>
            <li className={css.cardDiscriptionItem}>{car.mileage} km</li>
          </ul>
        </div>
      </div>

      <Link to={pathId} className={css.linkReadMore}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
