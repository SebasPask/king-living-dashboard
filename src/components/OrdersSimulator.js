'use client'

import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, selectAllOrders } from '../redux/ordersSlice';
import { updateStatsFromOrder } from '../redux/statsSlice';
import { selectCurrentLocation } from '../redux/locationSlice';
import { generateSimulatedOrder } from '../utils/mockDataGenerator';

/**
 * Component that simulates incoming orders at regular intervals
 * This component doesn't render anything visible - it just runs the simulation logic
 */
export default function OrdersSimulator({ enabled = true, interval = 3690 }) {
  const dispatch = useDispatch();
  const [isSimulating, setIsSimulating] = useState(enabled);
  const [simulationSpeed, setSimulationSpeed] = useState(interval);
  const currentLocation = useSelector(selectCurrentLocation);
  const allOrders = useSelector(selectAllOrders);
  // Use a ref to track the actual current order count
  const orderCountRef = useRef(allOrders.length);
  
  // Start/stop simulation
  const toggleSimulation = () => {
    setIsSimulating(prev => !prev);
  };
  
  // Change simulation speed
  const changeSpeed = (newInterval) => {
    setSimulationSpeed(newInterval);
  };
  
  // Function to check if we need to reload the page
  const checkAndReloadIfNeeded = (orderCount) => {
    if (orderCount === 113) {
      console.log('Order count reached exactly 113! Reloading page...');
      // Reload the page
      window.location.reload();
    }
  };

  useEffect(() => {
    // Skip if simulation is disabled
    if (!isSimulating) return;
    
    // Set initial order count
    orderCountRef.current = allOrders.length;
    
    // Generate and add a random order immediately on first render
    const initialOrder = generateSimulatedOrder();
    dispatch(addOrder(initialOrder));
    
    // Update stats based on the new order
    dispatch(updateStatsFromOrder({
      order: initialOrder,
      location: currentLocation
    }));
    
    // Increment and log order count
    orderCountRef.current += 1;
    console.log(`Initial order added (${orderCountRef.current}/113):`, initialOrder);
    
    // Set up interval for adding orders
    const intervalId = setInterval(() => {
      const newOrder = generateSimulatedOrder();
      dispatch(addOrder(newOrder));
      
      // Update stats based on the new order
      dispatch(updateStatsFromOrder({
        order: newOrder,
        location: currentLocation
      }));
      
      // Increment and log order count
      orderCountRef.current += 1;
      console.log(`New order added (${orderCountRef.current}/113):`, newOrder);
      
      // Check if we need to reload
      checkAndReloadIfNeeded(orderCountRef.current);
    }, simulationSpeed);
    
    // Clean up interval on component unmount or when isSimulating changes
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, isSimulating, simulationSpeed, currentLocation, allOrders.length]);
  
  // This component doesn't render anything visible
  return null;
}
