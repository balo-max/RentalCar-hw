import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (params, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams(params).toString();

      const urlGetCarsWithSearchParams = `/cars?${queryParams}`;

      const response = await axios.get(urlGetCarsWithSearchParams);

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);

export const getCarsById = createAsyncThunk(
  'cars/getCarsById',
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${carId}`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);
