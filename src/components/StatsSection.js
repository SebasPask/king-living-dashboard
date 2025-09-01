'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, selectLocations, selectCurrentLocation } from '../redux/locationSlice';
import { updateStats, selectStats } from '../redux/statsSlice';
import NumberFlow from '@number-flow/react';

// Utility function for conditional class names
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StatsSection() {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const currentLocation = useSelector(selectCurrentLocation);
  const stats = useSelector(selectStats);

  // Update stats when location changes
  useEffect(() => {
    dispatch(updateStats(currentLocation));
  }, [currentLocation, dispatch]);

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
          <h1 className="text-base/7 font-semibold leading-7 text-white">Locations</h1>
          <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-white/10 sm:pl-6 sm:leading-7">
            {locations.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(setLocation(item.name));
                }}
                className={classNames(item.current ? 'text-indigo-400' : 'text-white', 'hover:text-white')}
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
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-white">Revenue</dt>
            <dd className={`text-xs font-medium ${stats[0]?.changeType === 'positive' ? 'text-green-500' : 'text-rose-600 dark:text-rose-400'}`}>{stats[0]?.change || '+0.00%'}</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">
              <NumberFlow
                value={stats[0]?.value.toString().replace(/[^0-9.-]+/g, '')}
                duration={1000}
                delay={900}
                ease="easeInOut"
                format="currency"
                currency="USD"
                prefix="$"
              />
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:border-l sm:px-6 lg:border-t-0 xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-white">Expenses</dt>
            <dd className={`text-xs font-medium ${stats[3]?.changeType === 'positive' ? 'text-green-500' : 'text-rose-600 dark:text-rose-400'}`}>{stats[3]?.change || '+0.00%'}</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">
              <NumberFlow
                value={stats[3]?.value.toString().replace(/[^0-9.-]+/g, '')}
                duration={1000}
                delay={900}
                ease="easeInOut"
                format="currency"
                currency="USD"
                prefix="$"
              />
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 lg:border-l xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-white">New Orders</dt>
            <dd className={`text-xs font-medium ${stats[1]?.changeType === 'positive' ? 'text-green-500' : 'text-rose-600 dark:text-rose-400'}`}>{stats[1]?.change || '+0.00%'}</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">
              <NumberFlow
                value={stats[1]?.value.toString().replace(/[^0-9.-]+/g, '')}
                duration={1000}
                delay={500}
                ease="easeInOut"
              />
            </dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:border-l sm:px-6 lg:border-t-0 xl:px-8 dark:border-white/5">
            <dt className="text-sm/6 font-medium text-gray-500 dark:text-white">Processed Orders</dt>
            <dd className={`text-xs font-medium ${stats[2]?.changeType === 'positive' ? 'text-green-500' : 'text-rose-600 dark:text-rose-400'}`}>{stats[2]?.change || '+0.00%'}</dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900 dark:text-white">
              <NumberFlow
                value={stats[2]?.value.toString().replace(/[^0-9.-]+/g, '')}
                duration={1000}
                delay={500}
                ease="easeInOut"
              />
            </dd>
          </div>
        </dl>
      </div>
    </>
  )
}
