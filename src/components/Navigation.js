'use client'

import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MobileNavigation({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-800 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
            )}
          >
            <item.icon aria-hidden="true" className="size-6 shrink-0" />
            {item.name}
          </a>
        </li>
      ))}
    </>
  )
}

export function DesktopNavigation() {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className={classNames(
              item.current ? 'bg-white/5 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white',
              'group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold',
            )}
          >
            <item.icon aria-hidden="true" className="size-6 shrink-0" />
            <span className="sr-only">{item.name}</span>
          </a>
        </li>
      ))}
    </>
  )
}

export { navigation }
