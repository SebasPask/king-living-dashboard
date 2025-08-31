'use client'

import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'

// Stats data
const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]

// Secondary navigation data
const secondaryNavigation = [
  { name: 'Last 7 days', href: '#', current: true },
  { name: 'Last 30 days', href: '#', current: false },
  { name: 'All-time', href: '#', current: false },
]

// Utility function for conditional class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StatsSection() {
  return (
    <>
      {/* Decorative background elements */}
      <div className="absolute left-0 top-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>

      {/* Secondary navigation */}
      <header className="pb-4 pt-1 sm:pb-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
          <h1 className="text-base/7 font-semibold leading-7 text-white">Cashflow</h1>
          <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-white/10 sm:pl-6 sm:leading-7">
            {secondaryNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(item.current ? 'text-indigo-400' : 'text-gray-400', 'hover:text-white')}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </header>
      
      {/* Stats */}
      <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5 dark:border-b-white/10 dark:lg:border-t-white/5">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">Revenue</dt>
            <dd className="text-xs font-medium text-gray-700 dark:text-gray-300">+4.75%</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">$405,091.00</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:border-l sm:px-6 lg:border-t-0 xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">Overdue invoices</dt>
            <dd className="text-xs font-medium text-rose-600 dark:text-rose-400">+54.02%</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">$12,787.00</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 lg:border-l xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">Outstanding invoices</dt>
            <dd className="text-xs font-medium text-gray-700 dark:text-gray-300">-1.39%</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">$245,988.00</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:border-l sm:px-6 lg:border-t-0 xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-gray-400">Expenses</dt>
            <dd className="text-xs font-medium text-rose-600 dark:text-rose-400">+10.18%</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">$30,156.00</dd>
          </div>
        </dl>
      </div>
    </>
  )
}
