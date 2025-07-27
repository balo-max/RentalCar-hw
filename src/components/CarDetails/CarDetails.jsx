import BookingForm from '../BookingForm/BookingForm';
import CarDetailDescription from '../CarDetailDescription/CarDetailDescription';
import css from './CarDetails.module.css';

const CarDetails = ({ car }) => {
  if (!car) return;

  return (
    <div className={css.carDetailWrapper}>
      <div>
        <img
          className={css.carImage}
          src={car.img}
          alt=""
          width="640"
          height="512"
          loading="lazy"
        />
        <BookingForm />
      </div>
      <CarDetailDescription car={car} />
    </div>
  );
};

export default CarDetails;
