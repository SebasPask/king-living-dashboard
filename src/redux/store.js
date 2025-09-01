import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice';
import statsReducer from './statsSlice';
import ordersReducer from './ordersSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    stats: statsReducer,
    orders: ordersReducer,
  },
});
