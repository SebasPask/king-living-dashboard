'use client'

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
        orderNumber: '00012',
        href: '#',
        amount: '$7,600.00',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        orderNumber: '00011',
        href: '#',
        amount: '$10,000.00',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        orderNumber: '00009',
        href: '#',
        amount: '$2,000.00',
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
        orderNumber: '00010',
        href: '#',
        amount: '$14,000.00',
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
    <>
      <div className="space-y-16 py-10 xl:space-y-20">
        {/* <!-- Recent activity table --> */}
        <div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none dark:text-white">Recent activity</h2>
          </div>
          <div className="mt-6 overflow-hidden border-t border-gray-100 dark:border-white/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <table className="w-full text-left">
                  <thead className="sr-only">
                    <tr>
                      <th>Amount</th>
                      <th className="hidden sm:table-cell">Client</th>
                      <th>More details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm/6 text-gray-900 dark:text-white">
                      <th scope="colgroup" colSpan="3" className="relative isolate py-2 font-semibold">
                        <time dateTime="2023-03-22">Today</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/2.5"></div>
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/2.5"></div>
                      </th>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="hidden h-6 w-5 flex-none text-gray-400 sm:block dark:text-gray-500">
                            <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clipRule="evenodd" fillRule="evenodd" />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm/6 font-medium text-gray-900 dark:text-white">$7,600.00 USD</div>
                              <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/10">Paid</div>
                            </div>
                            <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">$500.00 tax</div>
                          </div>
                        </div>
                        <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm/6 text-gray-900 dark:text-white">Reform</div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Website redesign</div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">View<span className="hidden sm:inline"> transaction</span><span className="sr-only">, invoice #00012, Reform</span></a>
                        </div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Invoice <span className="text-gray-900 dark:text-white">#00012</span></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="hidden h-6 w-5 flex-none text-gray-400 sm:block dark:text-gray-500">
                            <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59L7.3 9.24a.75.75 0 0 0-1.1 1.02l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75Z" clipRule="evenodd" fillRule="evenodd" />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm/6 font-medium text-gray-900 dark:text-white">$10,000.00 USD</div>
                              <div className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset dark:bg-white/5 dark:text-gray-400 dark:ring-white/10">Withdraw</div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm/6 text-gray-900 dark:text-white">Tom Cook</div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Salary</div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">View<span className="hidden sm:inline"> transaction</span><span className="sr-only">, invoice #00011, Tom Cook</span></a>
                        </div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Invoice <span className="text-gray-900 dark:text-white">#00011</span></div>
                      </td>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="hidden h-6 w-5 flex-none text-gray-400 sm:block dark:text-gray-500">
                            <path d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clipRule="evenodd" fillRule="evenodd" />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm/6 font-medium text-gray-900 dark:text-white">$2,000.00 USD</div>
                              <div className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/10">Overdue</div>
                            </div>
                            <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">$130.00 tax</div>
                          </div>
                        </div>
                        <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm/6 text-gray-900 dark:text-white">Tuple</div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Logo design</div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">View<span className="hidden sm:inline"> transaction</span><span className="sr-only">, invoice #00009, Tuple</span></a>
                        </div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Invoice <span className="text-gray-900 dark:text-white">#00009</span></div>
                      </td>
                    </tr>

                    <tr className="text-sm/6 text-gray-900 dark:text-white">
                      <th scope="colgroup" colSpan="3" className="relative isolate py-2 font-semibold">
                        <time dateTime="2023-03-21">Yesterday</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/2.5"></div>
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/2.5"></div>
                      </th>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="hidden h-6 w-5 flex-none text-gray-400 sm:block dark:text-gray-500">
                            <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.75-4.75a.75.75 0 0 0 1.5 0V8.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L6.2 9.74a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clipRule="evenodd" fillRule="evenodd" />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm/6 font-medium text-gray-900 dark:text-white">$14,000.00</div>
                              <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-500/10 dark:text-green-500 dark:ring-green-500/10">Paid</div>
                            </div>
                            <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">$900.00 tax</div>
                          </div>
                        </div>
                        <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100 dark:bg-white/5"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm/6 text-gray-900 dark:text-white">SavvyCal</div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Website redesign</div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a href="#" className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">View<span className="hidden sm:inline"> transaction</span><span className="sr-only">, invoice #00010, SavvyCal</span></a>
                        </div>
                        <div className="mt-1 text-xs/5 text-gray-500 dark:text-gray-400">Invoice <span className="text-gray-900 dark:text-white">#00010</span></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
