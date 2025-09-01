import { createSlice } from '@reduxjs/toolkit';
import { selectCurrentLocation } from './locationSlice';
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/20/solid';

// Initial state with mock order data
const initialState = {
      transactions: [
        {
          id: 1,
          orderNumber: '01212',
          href: '#',
          amount: '$4,900',
          tax: '$500.00',
          status: 'Processing',
          location: 'Australia',
          description: 'Jasper Modular Sofa with Wide Chaise',
          icon: 'ArrowDownCircle',
        },
        {
          id: 2,
          orderNumber: '01211',
          href: '#',
          amount: '$2,490',
          status: 'Processed',
          location: 'United Kingdom',
          description: '1977 Modular Sofa with Chaise and Armrests',
          icon: 'ArrowUpCircle',
        },
        {
          id: 3,
          orderNumber: '01209',
          href: '#',
          amount: '$3,990',
          tax: '$130',
          status: 'Refunded',
          location: 'United States',
          description: 'Aura 3 Seater Modular Sofa with Aura Ottoman',
          icon: 'ArrowPath',
        },
        {
          id: 4,
          orderNumber: '01210',
          href: '#',
          amount: '$4,490',
          tax: '$900.00',
          status: 'Processed',
          location: 'Australia',
          description: '1978 High Back Modular Curved Corner Sofa with Armrests and Ottoman',
          icon: 'ArrowUpCircle',
        },
        {
          id: 5,
          orderNumber: '01210',
          href: '#',
          amount: '$3,990',
          tax: '$400.00',
          status: 'Processing',
          location: 'United States',
          description: 'Zaza 2.5 Seater Sofa with Armchair',
          icon: 'ArrowUpCircle',
        },
        {
          id: 6,
          orderNumber: '01210',
          href: '#',
          amount: '$3,990',
          tax: '$400.00',
          status: 'Refunded',
          location: 'Australia',
          description: 'Zaza 2.5 Seater Sofa with Armchair',
          icon: 'ArrowPath',
        },
      ],
};

// Create orders slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // Add any reducers here if needed
    updateOrders: (state, action) => {
      // In the future, you might want to update orders based on location
      // This is just a placeholder for now
    }
  },
});

// Export actions
export const { updateOrders } = ordersSlice.actions;

// Selectors
// Select all orders regardless of location
export const selectAllOrders = (state) => state.orders.transactions;

// Select orders filtered by the current location
export const selectOrders = (state) => {
  const currentLocation = selectCurrentLocation(state);
  
  // If 'All' is selected, return all transactions
  if (currentLocation === 'All') {
    return state.orders.transactions;
  }
  
  // Filter transactions based on location
  return state.orders.transactions.filter(transaction => 
    transaction.location === currentLocation
  );
};

export default ordersSlice.reducer;
