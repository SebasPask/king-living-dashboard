'use client'

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../redux/ordersSlice';
import { updateStatsFromOrder } from '../redux/statsSlice';
import { selectCurrentLocation } from '../redux/locationSlice';
import { generateSimulatedOrder } from '../utils/mockDataGenerator';

/**
 * Component that simulates incoming orders at regular intervals
 * This component doesn't render anything visible - it just runs the simulation logic
 */
export default function OrdersSimulator({ enabled = true, interval = 3500 }) {
  const dispatch = useDispatch();
  const [isSimulating, setIsSimulating] = useState(enabled);
  const [simulationSpeed, setSimulationSpeed] = useState(interval);
  const currentLocation = useSelector(selectCurrentLocation);
  
  // Start/stop simulation
  const toggleSimulation = () => {
    setIsSimulating(prev => !prev);
  };
  
  // Change simulation speed
  const changeSpeed = (newInterval) => {
    setSimulationSpeed(newInterval);
  };
  
  useEffect(() => {
    // Skip if simulation is disabled
    if (!isSimulating) return;
    
    // Generate and add a random order immediately on first render
    const initialOrder = generateSimulatedOrder();
    dispatch(addOrder(initialOrder));
    
    // Update stats based on the new order
    dispatch(updateStatsFromOrder({
      order: initialOrder,
      location: currentLocation
    }));
    
    // Set up interval for adding orders
    const intervalId = setInterval(() => {
      const newOrder = generateSimulatedOrder();
      dispatch(addOrder(newOrder));
      
      // Update stats based on the new order
      dispatch(updateStatsFromOrder({
        order: newOrder,
        location: currentLocation
      }));
      
      // Log for debugging
      console.log('New order added:', newOrder);
    }, simulationSpeed);
    
    // Clean up interval on component unmount or when isSimulating changes
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, isSimulating, simulationSpeed, currentLocation]);
  
  // This component doesn't render anything visible
  return null;
}
