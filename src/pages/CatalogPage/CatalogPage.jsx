import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList';
import Filter from '../../components/Filter/Filter';
import {
  seceltIsLoading,
  selectCars,
  selectTotalCars,
} from '../../redux/cars/selectors';
import { SyncLoader } from 'react-spinners';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import { useEffect, useState } from 'react';
import { changePage } from '../../redux/filters/slice';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const CatalogPage = () => {
  const isLoading = useSelector(seceltIsLoading);
  const totalCars = useSelector(selectTotalCars);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (page !== 1) {
      dispatch(changePage(page));
    }
  }, [page, dispatch]);

  return (
    <>
      <Filter />
      {isLoading && <SyncLoader color="#3470ff" style={overlayStyle} />}
      <CarsList />
      {cars.length < totalCars && (
        <LoadMoreButton onChangePage={handleChangePage} />
      )}
    </>
  );
};

export default CatalogPage;
