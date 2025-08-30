'use client'

import StatsSection from '@/components/StatsSection'
import RecentActivity from '@/components/RecentActivity'

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <StatsSection />
        <RecentActivity />
      </div>
    </>
  );
}
