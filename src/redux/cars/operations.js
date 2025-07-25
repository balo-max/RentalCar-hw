import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, thunkAPI) => {
    try {
      const { page, searchQuery, searchedIngredient, searchedCategory } =
        params;

      const queryParams = new URLSearchParams();
      queryParams.append('page', page);

      if (searchQuery) queryParams.append('search', searchQuery);
      if (searchedIngredient)
        queryParams.append('ingredient', searchedIngredient);
      if (searchedCategory) queryParams.append('category', searchedCategory);

      const urlForCars = `/cars?${queryParams.toString()}`;

      const { data } = await axios.get(urlForCars);

      return {
        ...data, // data, totalItems, page, etc.
        append: page > 1, // додаємо флаг для редюсера
      };
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);

export const getCarsById = createAsyncThunk(
  'cars/getCarsById',
  async (carsId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${carsId}`);
      return data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);
