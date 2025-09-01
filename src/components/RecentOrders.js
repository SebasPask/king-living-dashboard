'use client'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'
import { selectOrders, addOrder } from '../redux/ordersSlice'
import { motion, AnimatePresence } from 'framer-motion'

// Map of icon names to components
const iconMap = {
  ArrowDownCircle: ArrowDownCircleIcon,
  ArrowUpCircle: ArrowUpCircleIcon,
  ArrowPath: ArrowPathIcon,
}

// Utility function for conditional class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Define animation duration for new orders (in ms)
const NEW_ORDER_ANIMATION_DURATION = 3000

export default function RecentOrders() {
  // Get transactions data from Redux store
  const transactions = useSelector(selectOrders)
  const dispatch = useDispatch()

  // State to track which orders have been seen
  const [seenOrders, setSeenOrders] = useState({})

  useEffect(() => {
    // Mark new orders as seen after they've been displayed
    const newOrderIds = transactions
      .filter(t => t.isNew && !seenOrders[t.id])
      .map(t => t.id)

    if (newOrderIds.length > 0) {
      const timer = setTimeout(() => {
        const updatedSeenOrders = { ...seenOrders }
        newOrderIds.forEach(id => {
          updatedSeenOrders[id] = true
        })
        setSeenOrders(updatedSeenOrders)
      }, 1000) // Mark as seen after animation completes

      return () => clearTimeout(timer)
    }
  }, [transactions, seenOrders])

  return (
    <div className="space-y-16 py-10 xl:space-y-20">
      {/* Recent activity table */}
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none dark:text-white">Recent Orders</h2>
        </div>
        <div className="mt-6 overflow-hidden border-t border-gray-100 dark:border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="overflow-y-auto overflow-x-hidden">
                <div className="overflow-y-auto overflow-x-hidden h-[280px]">
                  <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Location</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions
                        .slice() // Create a copy to avoid mutating the original array
                        .sort((a, b) => {
                          // First prioritize by isNew flag (new orders first)
                          if (a.isNew && !b.isNew) return -1;
                          if (!a.isNew && b.isNew) return 1;
                          // Then sort by most recent first (assuming most recent are at the end)
                          return -1; // maintain reverse order for non-new items
                        })
                        .map((transaction) => (
                          <motion.tr
                            key={transaction.id}
                            initial={transaction.isNew && !seenOrders[transaction.id] ? { 
                              y: -50, 
                              opacity: 0, 
                              backgroundColor: 'rgba(254, 240, 138, 0.5)' 
                            } : { opacity: 1 }}
                            animate={{ 
                              y: 0, 
                              opacity: 1, 
                              backgroundColor: transaction.isNew && !seenOrders[transaction.id] 
                                ? ['rgba(254, 240, 138, 0.5)', 'rgba(254, 240, 138, 0.2)', 'rgba(254, 240, 138, 0)'] 
                                : 'transparent'
                            }}
                            transition={{
                              y: { type: 'spring', stiffness: 200, damping: 20 },
                              opacity: { duration: 0.5 },
                              backgroundColor: { duration: 1.2, times: [0, 0.7, 1] }
                            }}>
                            <td className="relative py-5 pr-6 pl-3">
                            <div className="flex gap-x-6">
                              {/* Icon based on transaction type */}
                              <div className="hidden h-6 w-5 flex-none text-gray-400 sm:block dark:text-gray-500">
                                {transaction.icon && iconMap[transaction.icon] &&
                                  React.createElement(iconMap[transaction.icon], {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true"
                                  })}
                              </div>
                              <div className="flex-auto">
                                <div className="flex items-start gap-x-3">
                                  <div className="text-sm/6 font-medium text-gray-900 dark:text-white">{transaction.amount}</div>
                                  <div className={classNames(
                                    transaction.status === 'Processing' ? 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/10' :
                                      transaction.status === 'Refunded' ? 'bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/10' :
                                        'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-white/5 dark:text-gray-400 dark:ring-white/10',
                                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                  )}>
                                    {transaction.status}
                                  </div>
                                </div>
                                {transaction.tax && (
                                  <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">{transaction.tax} tax</div>
                                )}
                              </div>
                            </div>
                            <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                            <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                          </td>
                          <td className="hidden py-5 pr-6 sm:table-cell">
                            <div className="text-sm/6 text-gray-900 dark:text-white">{transaction.location}</div>
                            <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">{transaction.description}</div>
                          </td>
                          <td className="py-5 pr-3 text-right">
                            <div className="flex justify-end">
                              <a href={transaction.href} className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                                View<span className="hidden sm:inline"> transaction</span>
                                <span className="sr-only">, order #{transaction.orderNumber}, {transaction.location}</span>
                              </a>
                            </div>
                            <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">
                              Order <span className="text-gray-900 dark:text-white">#{transaction.orderNumber}</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
