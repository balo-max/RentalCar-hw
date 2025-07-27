import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBrands = createAsyncThunk(
  'brands/getBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/brands');

      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Pls try reloading the page.');
    }
  }
);
