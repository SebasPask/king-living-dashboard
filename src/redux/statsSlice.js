import { createSlice } from '@reduxjs/toolkit';
import { generateStatsByRegion } from '../utils/mockDataGenerator';
import { selectCurrentLocation } from './locationSlice';

// Initial state with stats for default 'All' region
const initialState = {
  stats: generateStatsByRegion('All'),
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    updateStats: (state, action) => {
      // Update stats based on region
      state.stats = generateStatsByRegion(action.payload);
    },
    updateStatsFromOrder: (state, action) => {
      const { order, location } = action.payload;

      // Skip if the order location doesn't match the current location filter
      // or if we're not looking at 'All' locations
      if (location !== 'All' && order.location !== location) {
        return;
      }

      // Extract numeric amount from order amount string (remove $ and commas)
      const amount = parseFloat(order.amount.replace(/[^0-9.-]+/g, ''));

      // Update revenue based on order status
      if (order.status === 'Processing') {
        // Ensure current revenue is treated as a number
        const currentRevenue = typeof state.stats[0].value === 'number'
          ? state.stats[0].value
          : parseFloat(String(state.stats[0].value).replace(/[^0-9.-]+/g, ''));

        // Add to revenue for new or processed orders (as a proper number)
        state.stats[0].value = currentRevenue + amount;

        // Update change percentage (simplified for demo)
        state.stats[0].change = ((parseFloat(state.stats[0].change) + 0.1) % 10).toFixed(1);
      }
      // No action for refunded orders per request

      // Update order counts based on status
      if (order.status === 'Processing') {
        // Ensure current order count is treated as a number
        const currentNewOrders = typeof state.stats[1].value === 'number'
          ? state.stats[1].value
          : parseFloat(String(state.stats[1].value).replace(/[^0-9.-]+/g, ''));

        // Increment new orders count as a proper number
        state.stats[1].value = currentNewOrders + 1;

        // Update change percentage properly as a number
        state.stats[1].change = ((parseFloat(state.stats[1].change) + 0.2) % 10).toFixed(1);
      } else if (order.status === 'Processed') {
        // Ensure current processed order count is treated as a number
        const currentProcessedOrders = typeof state.stats[2].value === 'number'
          ? state.stats[2].value
          : parseFloat(String(state.stats[2].value).replace(/[^0-9.-]+/g, ''));

        // Increment processed orders count as a proper number
        state.stats[2].value = currentProcessedOrders + 1;

        // Update change percentage properly as a number
        state.stats[2].change = ((parseFloat(state.stats[2].change) + 0.2) % 10).toFixed(1);
      }
      // No action for refunded orders per request
    },
  },
});

// Export actions and reducer
export const { updateStats, updateStatsFromOrder } = statsSlice.actions;
export default statsSlice.reducer;

// Selector to get the current stats
export const selectStats = state => state.stats.stats;
