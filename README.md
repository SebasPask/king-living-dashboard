# King Living Dashboard

A real-time global orders monitoring dashboard for King Living furniture company, providing visual insights into order activity across different regions with interactive mapping and dynamic statistics.

## Detail Prompts for Application Building

These prompts would have been useful when building this application:

1. **Initial Setup:**
   - "Create a Next.js application with TailwindCSS for a global orders dashboard for a furniture company"
   - "Set up responsive layout with dark theme optimized for large displays"
   - "Configure Redux store for state management with separate slices for orders, statistics, and location"

2. **Map Component:**
   - "Create an interactive world map using react-simple-maps that highlights Australia, UK, and US"
   - "Implement region selection with visual feedback on the map"
   - "Add legend to map showing active regions and their status"

3. **Orders System:**
   - "Build a mock data generator for furniture orders using faker.js"
   - "Create an orders simulator component that generates realistic orders at configurable intervals"
   - "Design a recent orders display showing order details, customer information, and regional data"

4. **Stats Section:**
   - "Create stats cards for revenue, expenses, new orders, and processed orders"
   - "Implement region-specific stats filtering that updates when region changes"
   - "Add animations for stats changes to improve visual feedback"

5. **Navigation:**
   - "Design a navigation component for switching between regions (All, Australia, UK, US)"
   - "Connect navigation to Redux to update all components when region changes"
   - "Style navigation with active state indicators and hover effects"
   - "Create a top navigation bar with user profile, search functionality, and notifications"
   - "Add custom user avatar using local images from the public directory"
   - "Implement TopNavigation component with dropdown menu for user profile management and search bar"

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
