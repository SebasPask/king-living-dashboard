'use client'

import { Fragment } from 'react'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
} from '@heroicons/react/20/solid'

// Transaction statuses
const statuses = {
  Paid: 'bg-green-500/10 text-green-500 ring-green-500/10',
  Withdraw: 'bg-white/5 text-gray-400 ring-white/10',
  Overdue: 'bg-red-500/10 text-red-400 ring-red-500/10',
}

// Recent activity data
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

// Utility function for conditional class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RecentActivity() {
  return (
    <div className="space-y-16 py-16 xl:space-y-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-white">Recent activity</h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">See your monthly revenue growth and latest transactions</p>

          <div className="mt-6 overflow-hidden border-t border-white/10 sm:rounded-xl lg:mt-10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/5">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Transaction</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Amount</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Status</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Date</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-gray-900/75">
                  {days.map((day) => (
                    <Fragment key={day.dateTime}>
                      <tr className="text-sm leading-6">
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="relative isolate px-4 py-2 font-semibold text-white sm:px-6"
                        >
                          <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-white/10 bg-gray-800" />
                          <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-white/10 bg-gray-800" />
                          {day.date}
                        </th>
                      </tr>
                      {day.transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="relative py-5 pl-4 pr-3 sm:pl-6">
                            <div className="flex gap-x-3">
                              <transaction.icon
                                className={classNames(
                                  transaction.status === 'Paid'
                                    ? 'bg-green-500/10 stroke-green-500'
                                    : transaction.status === 'Withdraw'
                                      ? 'bg-white/10 stroke-white'
                                      : 'bg-rose-500/10 stroke-rose-500',
                                  'h-7 w-5 flex-none rounded-lg p-1'
                                )}
                                aria-hidden="true"
                              />
                              <div className="flex-auto">
                                <div className="flex items-start gap-x-3">
                                  <div className="font-medium text-white">
                                    {transaction.client}
                                  </div>
                                  <div
                                    className={classNames(
                                      statuses[transaction.status],
                                      'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                    )}
                                  >
                                    {transaction.status}
                                  </div>
                                </div>
                                <div className="mt-1 text-gray-400">
                                  {transaction.description} <span className="text-gray-600 font-semibold">#{transaction.invoiceNumber}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-5 text-sm text-white">
                            {transaction.amount}
                          </td>
                          <td className="px-3 py-5 text-sm text-gray-400">
                            {transaction.tax ? (
                              <span>
                                {transaction.tax} <span className="text-gray-600">/</span> Tax included
                              </span>
                            ) : (
                              <span>No tax</span>
                            )}
                          </td>
                          <td className="px-3 py-5 text-sm text-gray-400">
                            <time dateTime={day.dateTime}>{day.date}</time>
                          </td>
                          <td className="relative py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href={transaction.href}
                              className="text-indigo-400 hover:text-indigo-300"
                            >
                              View<span className="sr-only">, invoice #{transaction.invoiceNumber}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
