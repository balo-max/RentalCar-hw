import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filtersReduser from './filters/slice.js';
import carsReduser from './cars/slice.js';

const carsPersistedReducer = persistReducer(
  {
    key: 'favoriteCars',
    storage,
    whitelist: ['favoriteCars'],
  },
  carsReduser
);

export const store = configureStore({
  reducer: {
    cars: carsPersistedReducer,
    filters: filtersReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
