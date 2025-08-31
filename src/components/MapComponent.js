'use client'

import React, { useState, useEffect } from "react";
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

// Sample data for marker locations (stores/distribution centers)
const locations = [
  { name: "Sydney", coordinates: [151.2093, -33.8688], type: "headquarters" },
  { name: "Melbourne", coordinates: [144.9631, -37.8136], type: "store" },
  { name: "London", coordinates: [-0.1278, 51.5074], type: "store" },
  { name: "New York", coordinates: [-74.0060, 40.7128], type: "store" },
  { name: "Singapore", coordinates: [103.8198, 1.3521], type: "distribution" },
  { name: "Tokyo", coordinates: [139.6503, 35.6762], type: "distribution" },
];

const MapComponent = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Set map as loaded after a short delay to ensure smooth rendering
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black/40 border border-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Global Distribution Network</h2>
      <div className="text-sm text-gray-400 mb-3">Showing King Living locations worldwide</div>
      
      <div className="relative w-full h-[400px] bg-gray-900/50 rounded overflow-hidden">
        {!mapLoaded ? (
          <div className="flex items-center justify-center h-full w-full">
            <div className="text-purple-300">Loading map...</div>
          </div>
        ) : (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 130,
              center: [0, 0]
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
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1F2937"
                      stroke="#374151"
                      style={{
                        default: {
                          fill: "#1F2937",
                          outline: "none",
                          strokeWidth: 0.5,
                        },
                        hover: {
                          fill: "#374151",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#4B5563",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
            
              {/* Location markers */}
              {locations.map((location) => {
                const isHovered = hoveredLocation === location.name;
                const isHQ = location.type === "headquarters";
                
                return (
                  <Marker 
                    key={location.name} 
                    coordinates={location.coordinates}
                    onMouseEnter={() => setHoveredLocation(location.name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <g transform="translate(-8, -24)">
                      {/* Pulsing effect for HQ */}
                      {isHQ && (
                        <circle 
                          r={8} 
                          fill="#a855f7" 
                          opacity={0.4} 
                          style={{
                            animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                          }}
                        />
                      )}
                      
                      {/* Pin stem */}
                      <path
                        d="M8 24L8 10"
                        stroke={isHQ ? "#a855f7" : location.type === "store" ? "#c084fc" : "#d8b4fe"}
                        strokeWidth={2}
                      />
                      
                      {/* Pin head */}
                      <circle 
                        r={6} 
                        fill={isHQ ? "#a855f7" : location.type === "store" ? "#c084fc" : "#d8b4fe"} 
                        stroke="#1e1b4b"
                        strokeWidth={1}
                        style={{ 
                          transition: "all 0.2s", 
                          transform: isHovered ? "scale(1.3)" : "scale(1)", 
                        }}
                      />
                    </g>
                    
                    {/* Label */}
                    {(isHovered || isHQ) && (
                      <text 
                        textAnchor="middle"
                        y={-32}
                        style={{ 
                          fill: "#ffffff", 
                          fontSize: "10px", 
                          fontWeight: "500",
                          textShadow: "0px 0px 5px #000000"
                        }}
                      >
                        {location.name}{isHQ ? ' (HQ)' : ''}
                      </text>
                    )}
                  </Marker>
                );
              })}
            </ZoomableGroup>
          </ComposableMap>
        )}
        
        {/* Legend */}
        <div className="absolute bottom-2 left-2 bg-black/80 p-2 rounded text-xs text-gray-300 border border-gray-800 z-20">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
            <span>Headquarters</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-purple-400 mr-1"></div>
            <span>Store Location</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-300 mr-1"></div>
            <span>Distribution Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
