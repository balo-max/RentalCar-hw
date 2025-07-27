import { createSlice } from '@reduxjs/toolkit';
import { getBrands } from './operations';

const handlePending = state => {
  state.error = null;
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'filters',

  initialState: {
    brands: [],
    filters: {},
    searchSubmitFilter: {},
    loading: false,
    error: null,
  },
  reducers: {
    changeBrandFilter(state, action) {
      state.filters = { ...state.filters, brand: action.payload };
    },
    changePriceFilter(state, action) {
      state.filters = { ...state.filters, rentalPrice: action.payload };
    },
    changeMinMileageFilter(state, action) {
      state.filters = { ...state.filters, minMileage: action.payload };
    },
    changeMaxMileageFilter(state, action) {
      state.filters = { ...state.filters, maxMileage: action.payload };
    },
    changePage(state, action) {
      state.searchSubmitFilter = { ...state.filters, page: action.payload };
    },
    submitFiltres(state) {
      state.searchSubmitFilter = { ...state.filters };
    },
    resetFilters(state) {
      state.filters = {};
      state.searchSubmitFilter = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBrands.rejected, handleRejected)
      .addCase(getBrands.pending, handlePending)
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      });
  },
});

export const {
  changeBrandFilter,
  changePriceFilter,
  changeMinMileageFilter,
  changeMaxMileageFilter,
  changePage,
  submitFiltres,
  resetFilters,
} = slice.actions;

export default slice.reducer;
