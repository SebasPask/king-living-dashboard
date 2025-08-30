'use client'

export default function Reports() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-white mb-6">Reports</h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow">
        <h2 className="text-xl font-medium text-white mb-4">Performance Report</h2>
        <p className="text-gray-300 mb-4">View and analyze your performance metrics for the current month.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-gray-300 text-sm font-medium">Revenue</h3>
            <p className="text-white text-2xl font-bold mt-1">$45,231</p>
            <p className="text-green-400 text-sm mt-1">↑ 12.5% from last month</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-gray-300 text-sm font-medium">New Customers</h3>
            <p className="text-white text-2xl font-bold mt-1">243</p>
            <p className="text-green-400 text-sm mt-1">↑ 8.2% from last month</p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-gray-300 text-sm font-medium">Active Projects</h3>
            <p className="text-white text-2xl font-bold mt-1">12</p>
            <p className="text-red-400 text-sm mt-1">↓ 2 from last month</p>
          </div>
        </div>
      </div>
    </>
  )
}