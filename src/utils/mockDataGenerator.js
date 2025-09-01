'use client';

import { faker } from '@faker-js/faker';

// Product catalog for realistic sofa names
const sofaProducts = [
  'Jasper Modular Sofa with Wide Chaise',
  '1977 Modular Sofa with Chaise and Armrests',
  'Aura 3 Seater Modular Sofa with Aura Ottoman',
  '1978 High Back Modular Curved Corner Sofa with Armrests and Ottoman',
  'Zaza 2.5 Seater Sofa with Armchair',
  'KING Sofa Bed',
  'King Cinema Premiere 3 Seater TouchGlide® Recliner',
  'King Cinema Premiere Recliner TouchGlide',
  'Delta Coast Modular Sofa with Chaise',
  'Delta Coast Ottoman',
  'Reo 3 Seater Sofa with Smart Pockets®',
  'Luna Armchair',
  'Strata Ottoman',
  'Plaza II 3 Seater Sofa',
  'Felix Modular Sofa with Chaise',
  'Neo Motion 3 Seater Recliner Sofa'
];

// Create consistent data for each region
export const generateMockOrders = (count = 50) => {
  const regions = ['Australia', 'United Kingdom', 'United States'];
  const orders = [];

  for (let i = 0; i < count; i++) {
    const region = regions[i % regions.length];
    const date = faker.date.recent({ days: 30 });
    
    orders.push({
      id: faker.string.uuid(),
      customerName: faker.person.fullName(),
      product: faker.commerce.productName(),
      amount: parseFloat(faker.commerce.price({ min: 100, max: 5000 })),
      date: date,
      formattedDate: date.toLocaleDateString(),
      region: region
    });
  }

  return orders;
};

// Generate a simulated order for real-time updates
export const generateSimulatedOrder = () => {
  // Get a random location
  const locations = ['Australia', 'United Kingdom', 'United States'];
  const location = faker.helpers.arrayElement(locations);

  // Get a random product
  const description = faker.helpers.arrayElement(sofaProducts);

  // Generate a random order number (5 digits)
  const orderNumber = faker.string.numeric(5);

  // Generate a random amount between $800 and $5000
  const rawAmount = faker.number.int({ min: 800, max: 5000 });
  const amount = `$${rawAmount.toLocaleString()}`;

  // Generate a tax amount (roughly 10% of price)
  const taxAmount = Math.round(rawAmount * 0.1);
  const tax = `$${taxAmount.toLocaleString()}`;

  // Random status (only Processing or Processed - no refunds)
  const statuses = ['Processing', 'Processed'];
  const status = faker.helpers.arrayElement(statuses);

  // Icon based on status
  let icon;
  if (status === 'Processing') {
    icon = 'ArrowDownCircle';
  } else {
    // For Processed status
    icon = 'ArrowUpCircle';
  }

  // Return an order object that matches our Redux store format
  return {
    id: faker.string.uuid(),
    orderNumber,
    amount,
    tax,
    status,
    location,
    description,
    icon,
    isNew: true // Flag to indicate this is a new order for animations
  };
};

// Generate stats data based on region
export const generateStatsByRegion = (region) => {
  // Base values for different regions
  const baseValues = {
    'Australia': {
      revenue: 405091,
      newOrders: 146,
      processedOrders: 421,
      expenses: 30156
    },
    'United Kingdom': {
      revenue: 320450,
      newOrders: 264,
      processedOrders: 398,
      expenses: 25800
    },
    'United States': {
      revenue: 580250,
      newOrders: 443,
      processedOrders: 413,
      expenses: 42300
    },
    'All': {
      revenue: 1305791,
      newOrders: 853,
      processedOrders: 1232,
      expenses: 98256
    }
  };

  // Get base values for the requested region or use Australia as default
  const base = baseValues[region] || baseValues['Australia'];
  
  // Add some randomness around the base values
  const randomize = (value) => {
    const fluctuation = value * faker.number.float({ min: -0.05, max: 0.05 });
    return value + fluctuation;
  };

  // Generate stats with randomized values
  return [
    { 
      name: 'Revenue', 
      value: `$${randomize(base.revenue).toFixed(0)}`,
      change: `+${faker.number.float({ min: 1, max: 8 }).toFixed(0)}%`,
      changeType: 'positive'
    },
    { 
      name: 'New Orders',
      value: `${randomize(base.newOrders).toFixed(0)}`,
      change: `+${faker.number.float({ min: 20, max: 60 }).toFixed(0)}%`,
      changeType: 'positive'
    },
    { 
      name: 'Processed Orders',
      value: `${randomize(base.processedOrders).toFixed(0)}`,
      change: `+${faker.number.float({ min: 0.5, max: 3 }).toFixed(0)}%`,
      changeType: 'positive'
    },
    { 
      name: 'Expenses', 
      value: `$${randomize(base.expenses).toFixed(0)}`,
      change: `+${faker.number.float({ min: 5, max: 15 }).toFixed(0)}%`,
      changeType: 'positive'
    }
  ];
};
