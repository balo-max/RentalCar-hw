import { useParams } from 'react-router-dom';
import CarDetails from '../../components/CarDetails/CarDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsById } from '../../redux/cars/operations';
import { seceltCurrentCar, seceltIsLoading } from '../../redux/cars/selectors';

const ViewCarPage = () => {
  const { id } = useParams();
  const dispath = useDispatch();

  const car = useSelector(seceltCurrentCar);
  const isLoading = useSelector(seceltIsLoading);

  useEffect(() => {
    dispath(getCarsById(id));
  }, [dispath, id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <CarDetails car={car} />
    </>
  );
};

export default ViewCarPage;
