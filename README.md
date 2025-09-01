# King Living Dashboard

A real-time global orders monitoring dashboard for King Living furniture company, providing visual insights into order activity across different regions with interactive mapping and dynamic statistics.

## Consolidated Implementation Prompts

These 7 comprehensive prompts provide detailed guidance for building this application:

### 1. **Project Foundation & Redux Architecture**
"Set up a Next.js 14 application with complete Redux state management. Create the project using `create-next-app` with TailwindCSS. Configure src/app/ structure with layout.js and page.js. Install @reduxjs/toolkit, @faker-js/faker, react-simple-maps, @number-flow/react, and @heroicons/react. 

Create src/redux/store.js with configureStore containing three slices: locationSlice (manages currentLocation='All', locations array with All/Australia/United Kingdom/United States, setLocation reducer, selectCurrentLocation selector), ordersSlice (transactions array with 11 initial orders, addOrder reducer adding to position 0 with isNew/timestamp, selectOrders selector filtering by location), and statsSlice (generateStatsByRegion('All') initial state, updateStats and updateStatsFromOrder reducers with parseFloat handling, selectStats selector). 

Setup Redux Provider in src/redux/provider.js wrapping the entire application in layout.js. Configure dark theme CSS with gray-900 backgrounds, white text, proper responsive classes (sm:, lg:, xl:), and hover states throughout."

### 2. **Mock Data System & State Logic**
"Build a comprehensive fake data generator in src/utils/mockDataGenerator.js. Create a sofaProducts array with 16 specific King Living furniture names (Jasper Modular Sofa, 1977 Modular Sofa, etc.). 

Implement generateSimulatedOrder() returning: faker.string.uuid() id, faker.string.numeric(5) orderNumber, faker.number.int({min:800,max:5000}) amount formatted as '$X,XXX', tax calculated as 10% of amount, status from ['Processing','Processed'], location from ['Australia','United Kingdom','United States'], description from sofaProducts array, icon ('ArrowDownCircle' for Processing, 'ArrowUpCircle' for Processed), and isNew:true flag.

Create generateStatsByRegion(region) with base values: Australia{revenue:405091,newOrders:146,processedOrders:421,expenses:30156}, UK{revenue:320450,newOrders:264,processedOrders:398,expenses:25800}, US{revenue:580250,newOrders:443,processedOrders:413,expenses:42300}, All{revenue:1305791,newOrders:853,processedOrders:1232,expenses:98256}. Add ±5% randomization using faker.number.float({min:-0.05,max:0.05}) and return formatted stats array with name, value, change percentage, and changeType."

### 3. **Core UI Components & Real-time Simulation**
"Create three integrated components: OrdersSimulator (invisible background process), MapComponent (interactive world map), and StatsSection (animated statistics display).

OrdersSimulator in src/components/: Accept props enabled=true and interval=3690, render null, use useEffect with setInterval calling generateSimulatedOrder() every interval, dispatch both addOrder and updateStatsFromOrder({order, location:currentLocation}), add console.log for debugging, implement proper cleanup.

MapComponent: Install react-simple-maps, configure ComposableMap with projection='geoMercator' projectionConfig={{scale:260,center:[5,10]}}, load geography from '/features.json', implement country highlighting (selected:#4f46e5, unselected:#1F2937), add legend with current region display, handle loading errors with fallback UI, connect to selectCurrentLocation for real-time updates.

StatsSection: Install @number-flow/react, create 4 stat cards (Revenue, Expenses, New Orders, Processed Orders) using NumberFlow with duration:2300ms, delay:200ms, easeInOut animation, format currency with $ prefix, connect to selectStats with useEffect updating on currentLocation changes, include region navigation with text-indigo-400 active styling."

### 4. **Navigation Systems & User Interface**
"Implement dual navigation: regional switching integrated in StatsSection and top application navigation bar.

Regional Navigation: Embed in StatsSection header with 'Locations' title, map through selectLocations array, style active location with text-indigo-400 and inactive with text-white, dispatch setLocation(item.name) on click with preventDefault, use responsive classes sm:border-l sm:border-white/10 sm:pl-6.

TopNavigation Component: Use Headless UI Menu/MenuButton/MenuItems, create search form with MagnifyingGlassIcon (col-start-1 row-start-1 positioning), add notification BellIcon button with hover:text-white, implement profile dropdown with img src='/public/sebastian-pask.webp' (size-8 rounded-full), display 'Sebastian' username with ChevronDownIcon, style dropdown with bg-gray-800 py-2 rounded-md, include proper transition classes data-closed:scale-95 data-closed:opacity-0."

### 5. **Orders Display & Table Management**
"Create RecentOrders component with responsive table displaying filtered order data. Structure: container with max-w-7xl mx-auto px-4, table with bg-black/40 border-gray-800 styling, thead with sticky positioning and gray-500 text.

Columns: Order # (orderNumber), Amount (formatted with $ and commas), Status (with icon mapping: Processing=ArrowDownCircle, Processed=ArrowUpCircle, Refunded=ArrowPath), Location (region name), Description (product name). 

Connect to Redux using selectOrders (automatically filters by currentLocation), implement new order animations using isNew flag and _timestamp, style status badges with conditional colors (Processing: bg-yellow-100 text-yellow-800, Processed: bg-green-100 text-green-800), add hover effects on table rows, implement responsive design with hidden columns on mobile (hide tax and location on small screens), limit display to recent 20 orders for performance."

### 6. **Application Integration & Layout**
"Assemble the complete application in src/app/page.js with proper component hierarchy and styling. Structure: OrdersSimulator with interval={8000} (invisible), decorative background gradients with clip-path styling, StatsSection at top, MapComponent in max-w-7xl container with mt-8 spacing, RecentOrders at bottom.

Add gradient background elements: absolute positioning with -z-10, transform-gpu blur-3xl, aspect-[1108/632] dimensions, bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20, complex clip-path polygon for visual appeal.

Ensure proper 'use client' directives on all interactive components, implement responsive spacing with px-6 lg:px-8 classes, add proper isolation with 'relative isolate overflow-hidden' on main container. Configure global layout in layout.js with Redux Provider wrapping, proper font loading, and metadata configuration."


## Technical Design Decisions & Reasoning

### Architecture
- **Next.js App Router**: Used for simplified routing and server components, providing optimized performance
- **Redux**: Implemented for centralized state management with predictable data flow between components
- **React-Simple-Maps**: Chosen for interactive geographical visualization without requiring external services
- **Component Structure**: Organized with clear separation of concerns:
  - `OrdersSimulator`: Background process component that generates mock orders
  - `MapComponent`: Visual representation of global operations
  - `StatsSection`: Dynamic metrics display
  - `RecentOrders`: Real-time order monitoring
  - `TopNavigation`: User interface for search, notifications, and user profile management

### State Management
- Used Redux slices pattern for modular state management:
  - `locationSlice`: Handles region selection and filtering
  - `ordersSlice`: Manages orders data and history
  - `statsSlice`: Updates statistics based on orders and selected region

### Data Simulation
- Implemented a mock data generator using `@faker-js/faker` for realistic order simulation
- Created interval-based simulation to mimic real-world order flow with configurable speed
- Connected simulated orders to statistics updates for realistic dashboard behavior

### UI/UX Design
- Dark theme optimized for visibility on large displays (e.g., office dashboards)
- Interactive map with region highlighting for spatial context
- Responsive design that works across different screen sizes
- User-friendly top navigation with profile dropdown and search functionality
- Personalized user experience with custom avatar images stored locally

## Setup & Run Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd king-living-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Interacting with the dashboard:**
   - Switch between regions using the navigation tabs
   - Watch as new orders are automatically generated
   - Observe how statistics update based on region selection
   - Explore the interactive map to visualize global operations
   - Use the search functionality in the top navigation
   - Access user profile options via the dropdown menu

## Assumptions Made

1. **Data & Analytics:**
   - Assumed mock data is sufficient for demonstration purposes
   - Assumed three main regions of operation (Australia, UK, US)
   - Assumed statistics should be filterable by region

2. **Performance:**
   - Assumed dashboard would be displayed on large screens in office environments
   - Assumed periodic updates (every few seconds) are sufficient for real-time simulation

3. **User Experience:**
   - Assumed users primarily need a high-level overview of global operations
   - Assumed dark theme is preferred for extended dashboard viewing
   - Assumed minimal user interaction required beyond region filtering
   - Assumed personalized user experience with profile details is valuable
   - Assumed search functionality would be needed for larger datasets

4. **Technical:**
   - Assumed client-side rendering is acceptable for this dashboard application
   - Assumed Redux is appropriate for state management despite adding complexity
   - Assumed local storage of assets (like profile images) in the public directory

## Reflection on AI in Development Process

### How AI Helped
- **Accelerated Development**: Quickly scaffolded component structures and Redux setup
- **Code Quality**: Suggested patterns for clean separation of concerns
- **Problem Solving**: Provided solutions for integrating the map with region selection
- **Best Practices**: Recommended approaches for simulating real-time data and updates
- **Cross-component Communication**: Facilitated efficient Redux implementation
- **UI Component Creation**: Generated reusable components like TopNavigation with profile management

### Challenges with AI
- **Understanding Project Context**: Initial iterations required clarification on the specific use case
- **Component Integration**: Manual adjustments were needed for full component integration
- **Styling Consistency**: Some suggested styles needed harmonization for visual cohesion
- **Performance Optimization**: Additional manual refinement needed for optimal performance
- **Edge Cases**: AI-generated code sometimes missed handling specific edge cases
- **Asset Management**: Needed guidance on handling local assets like profile images
