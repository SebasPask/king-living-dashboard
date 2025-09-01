'use client'

import StatsSection from '@/components/StatsSection'
import RecentOrders from '@/components/RecentOrders'
import MapComponent from '@/components/MapComponent'
import OrdersSimulator from '@/components/OrdersSimulator'

export default function Home() {
  return (
    <>
      {/* Orders Simulator - invisible component that adds orders periodically */}
      <OrdersSimulator interval={8000} />
      
      <div className="relative isolate overflow-hidden">
        <StatsSection />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
          <MapComponent />
        </div>
        <RecentOrders />
      </div>
    </>
  );
}
