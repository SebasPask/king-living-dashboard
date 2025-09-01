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
      amount: '$2,490',
      status: 'Processed',
      location: 'United Kingdom',
      description: '1977 Modular Sofa with Chaise and Armrests',
      icon: 'ArrowUpCircle',
    },
    {
      id: 3,
      orderNumber: '01209',
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
      amount: '$3,990',
      tax: '$400.00',
      status: 'Processing',
      location: 'United States',
      description: 'Zaza 2.5 Seater Sofa with Armchair',
      icon: 'ArrowUpCircle',
    },
    {
      id: 6,
      orderNumber: '01215',
      amount: '$950',
      tax: '$40',
      status: 'Processing',
      location: 'Australia',
      description: 'KING Sofa Bed',
      icon: 'ArrowDownCircle',
    },
    {
      id: 7,
      orderNumber: '01216',
      amount: '$6,690',
      tax: '$600',
      status: 'Processed',
      location: 'Australia',
      description: 'King Cinema Premiere 3 Seater TouchGlide® Recliner with Wide Seats, 2 ',
      icon: 'ArrowUpCircle',
    },
    {
      id: 8,
      orderNumber: '01217',
      amount: '$2,290',
      tax: '$200',
      status: 'Processing',
      location: 'United Kingdom',
      description: 'King Cinema Premiere Recliner TouchGlide ',
      icon: 'ArrowDownCircle',
    },
    {
      id: 9,
      orderNumber: '01218',
      amount: '$2,990',
      tax: '$289',
      status: 'Processed',
      location: 'United Kingdom',
      description: 'Delta Coast Modular Sofa with Chaise',
      icon: 'ArrowDownCircle',
    },
    {
      id: 10,
      orderNumber: '01219',
      amount: '$2,290',
      tax: '$200',
      status: 'Processing',
      location: 'United Kingdom',
      description: 'Delta Coast Ottoman',
      icon: 'ArrowDownCircle',
    },
    {
      id: 11,
      orderNumber: '01220',
      amount: '$3,490',
      tax: '$340',
      status: 'Processing',
      location: 'United States',
      description: 'Reo 3 Seater Sofa with Smart Pockets®',
      icon: 'ArrowDownCircle',
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
    },
    addOrder: (state, action) => {
      // Add a new order to the state with isNew flag and timestamp
      const orderWithNewFlag = {
        ...action.payload,
        isNew: true,
        _timestamp: Date.now() // Add timestamp to track when it was added
      };
      
      // Ensure we insert at position 0 (top of the list)
      state.transactions.unshift(orderWithNewFlag);
      
      // Optionally limit the number of orders to keep the list manageable
      if (state.transactions.length > 50) {
        state.transactions = state.transactions.slice(0, 50);
      }
    }
  },
});

// Export actions
export const { updateOrders, addOrder } = ordersSlice.actions;

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
