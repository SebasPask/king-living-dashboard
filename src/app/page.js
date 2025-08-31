'use client'

import StatsSection from '@/components/StatsSection'
import RecentActivity from '@/components/RecentActivity'
import MapComponent from '@/components/MapComponent'

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <StatsSection />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
          <MapComponent />
        </div>
        <RecentActivity />
      </div>
    </>
  );
}
