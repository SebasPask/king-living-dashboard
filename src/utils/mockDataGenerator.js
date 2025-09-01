'use client';

import { faker } from '@faker-js/faker';

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
      value: `${randomize(base.processedOrders).toFixed(0)}`,
      change: `-${faker.number.float({ min: 20, max: 60 }).toFixed(0)}%`,
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
      change: `-${faker.number.float({ min: 5, max: 15 }).toFixed(0)}%`,
      changeType: 'positive'
    }
  ];
};
