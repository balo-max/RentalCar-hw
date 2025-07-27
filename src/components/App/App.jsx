import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { getCars } from '../../redux/cars/operations';
import { getBrands } from '../../redux/filters/operations';

import { Toaster } from 'react-hot-toast';
import SyncLoader from 'react-spinners/SyncLoader';
import { selectParams } from '../../redux/filters/selectors';

const Home = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const ViewCar = lazy(() => import('../../pages/ViewCarPage/ViewCarPage'));
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  color: '#3470ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

function App() {
  const params = useSelector(selectParams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars(params));
    dispatch(getBrands());
  }, [dispatch, params]);

  return (
    <>
      <Layout>
        <Suspense
          fallback={<SyncLoader color="#3470ff" style={overlayStyle} />}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Catalog />} />
            <Route path="/cars/:id" element={<ViewCar />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
