import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import statsReducer from './statsSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    stats: statsReducer,
  },
});
