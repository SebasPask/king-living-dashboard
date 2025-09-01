import { createSlice } from '@reduxjs/toolkit';
import { generateStatsByRegion } from '../utils/mockDataGenerator';

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
  },
});

// Export actions and reducer
export const { updateStats } = statsSlice.actions;
export default statsSlice.reducer;

// Selector to get the current stats
export const selectStats = state => state.stats.stats;
