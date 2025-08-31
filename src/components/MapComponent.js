'use client'

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { selectCurrentLocation } from '../redux/locationSlice';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "/features.json";

// Countries to highlight with their colors
const highlightedCountries = [
  { name: "Australia", color: "#7c86ff" },  // Purple
  { name: "United States", color: "#7c86ff" }, // Blue
  { name: "United Kingdom", color: "#7c86ff" }, // Green
];

const MapComponent = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mapError, setMapError] = useState(false);
  
  // Get current location from Redux store
  const currentLocation = useSelector(selectCurrentLocation);

  // Handle error if map fails to load
  const handleMapError = () => {
    setMapError(true);
    console.error("Error loading map data");
  };

  return (
    <div className="bg-black/40 border border-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Global Distribution Network</h2>
      <div className="relative w-full h-[400px] bg-gray-900/50 rounded overflow-hidden">
        {mapError ? (
          <div className="flex items-center justify-center h-full w-full">
            <div className="text-red-400">Error loading map. Please check the console for details.</div>
          </div>
        ) : (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 260,
              center: [5, 10]
            }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#111827",
            }}
          >
              <ZoomableGroup zoom={1} center={[0, 0]}>
                <Sphere stroke="#374151" strokeWidth={0.5} fill="transparent" />
                <Graticule stroke="#374151" strokeWidth={0.5} />
                <Geographies geography={geoUrl} onError={handleMapError}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      // Check if the country matches current location or should be highlighted
                      const isSelected = 
                        (currentLocation === 'Australia' && geo.properties.name === 'Australia') ||
                        (currentLocation === 'United Kingdom' && geo.properties.name === 'United Kingdom') ||
                        (currentLocation === 'United States' && geo.properties.name === 'United States') ||
                        (currentLocation === 'All');
                        
                      // Check if this country is in our highlighted countries list
                      const isHighlighted = highlightedCountries.some(c => c.name === geo.properties.name);
                      
                      // Get the fill color - bright color if selected, dark background for all non-selected
                      const fillColor = isSelected && isHighlighted ? 
                        '#4f46e5' : // Bright indigo for selected countries
                        '#1F2937';  // Dark background for all non-selected countries

                      // Slightly lighten colors for hover and pressed states
                      const hoverColor = isSelected && isHighlighted ? 
                        '#6366f1' : // Lighter indigo for selected hover
                        '#374151';  // Lighter background for all non-selected countries hover
                          
                      const pressedColor = isSelected && isHighlighted ? 
                        '#4338ca' : // Darker indigo for selected pressed
                        '#4B5563';  // Darker background for all non-selected countries pressed

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={fillColor}
                          stroke="#374151"
                          style={{
                            default: {
                              fill: fillColor,
                              outline: "none",
                              strokeWidth: 0.9,
                            },
                            hover: {
                              fill: hoverColor,
                              outline: "none",
                              opacity: 0.8,
                            },
                            pressed: {
                              fill: pressedColor,
                              outline: "none",
                              opacity: 0.9,
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
        )}

        {/* Legend */}
        <div className="absolute bottom-2 left-2 bg-black/80 p-2 rounded text-xs text-gray-300 border border-gray-800 z-20">
          <div className="mb-2 pb-1 border-b border-gray-700">
            <span className="font-medium">Selected Region: {currentLocation}</span>
          </div>
          {highlightedCountries.map(country => (
            <div key={country.name} className="flex items-center mb-1">
              <div 
                className="w-3 h-3 mr-2 rounded-full" 
                style={{ 
                  backgroundColor: 
                    (currentLocation === country.name || currentLocation === 'All') ? 
                    '#4f46e5' : '#6b7280'
                }}
              ></div>
              <span className={`${(currentLocation === country.name || currentLocation === 'All') ? 'text-white font-medium' : ''}`}>
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
