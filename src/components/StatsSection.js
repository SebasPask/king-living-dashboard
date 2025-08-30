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
      <header className="pb-4 pt-6 sm:pb-6">
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
      
      {/* Stats cards */}
      <div className="border-b border-white/10 bg-gray-900/70 mt-6">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
          {stats.map((stat, statIdx) => (
            <div
              key={stat.name}
              className={classNames(
                statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
                'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-white/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
              )}
            >
              <dt className="text-sm font-medium leading-6 text-gray-400">{stat.name}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-white">{stat.value}</dd>
              <dd className={classNames(
                stat.changeType === 'negative' ? 'text-rose-500' : 'text-green-500',
                'flex items-baseline gap-x-2 text-xs font-medium'
              )}>
                {stat.changeType === 'negative' ? (
                  <ArrowDownCircleIcon className="h-4 w-4 flex-none fill-rose-500/20 stroke-rose-500" aria-hidden="true" />
                ) : (
                  <ArrowUpCircleIcon className="h-4 w-4 flex-none fill-green-500/20 stroke-green-500" aria-hidden="true" />
                )}
                {stat.change}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
