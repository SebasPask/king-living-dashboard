import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: 'All',
  locations: [
    { name: 'All', href: '#', current: true },
    { name: 'Australia', href: '#', current: false },
    { name: 'United Kingdom', href: '#', current: false },
    { name: 'United States', href: '#', current: false },
 
  ]
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      // Update current location
      state.currentLocation = action.payload;
      
      // Update the "current" property for each location
      state.locations = state.locations.map(loc => ({
        ...loc,
        current: loc.name === action.payload
      }));
    }
  }
});

// Export actions and reducer
export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;

// Selector to get the current location
export const selectCurrentLocation = state => state.location.currentLocation;

// Selector to get all locations with their current status
export const selectLocations = state => state.location.locations;
