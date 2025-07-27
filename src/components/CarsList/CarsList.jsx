import css from './CarsList.module.css';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/cars/selectors';
import CarCard from '../CarCard/CarCard';

const CarsList = () => {
  const cars = useSelector(selectCars);

  return cars.length === 0 ? (
    <p className={css.carsNotFound}>Cars not found</p>
  ) : (
    <>
      <ul className={css.carsList}>
        {cars.map(car => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CarsList;
