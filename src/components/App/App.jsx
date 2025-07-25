import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import ViewCarPage from '../../pages/ViewCarPage/ViewCarPage';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CatalogPage />} />
          <Route path="/cars/:id" element={<ViewCarPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
