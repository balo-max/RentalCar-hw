import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarsById } from './operations';

const handlePending = state => {
  state.error = null;
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'cars',

  initialState: {
    items: [],
    favoriteCars: [],
    loading: false,
    error: null,
    currentCar: null,
    totalCars: null,
  },
  reducers: {
    addFavoriteCars(state, action) {
      state.favoriteCars.push(action.payload);
    },
    deleteFavoriteCars(state, action) {
      const favoriteCars = state.favoriteCars.filter(i => i !== action.payload);

      state.favoriteCars = favoriteCars;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.rejected, handleRejected)
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        const { cars, page, totalCars } = action.payload;

        state.totalCars = totalCars;

        if (page === 1) {
          state.items = cars;
        } else {
          state.items = [...state.items, ...cars];
        }
      })

      .addCase(getCarsById.rejected, handleRejected)
      .addCase(getCarsById.pending, handlePending)
      .addCase(getCarsById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCar = action.payload;
      });
  },
});

export const { addFavoriteCars, deleteFavoriteCars } = slice.actions;

export default slice.reducer;
