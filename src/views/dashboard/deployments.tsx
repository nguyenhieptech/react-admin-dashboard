import { imageRegistry } from '@/assets';
import { cn } from '@/utils';
import { Menu, Transition } from '@headlessui/react';
import {
  ChevronRightIcon,
  ChevronUpDownIcon,
  ClockIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid';
import { Fragment } from 'react';

type Status = 'offline' | 'online' | 'error';

type Environment = 'preview' | 'production';

type Deployment = {
  id: number;
  projectName: string;
  teamName: string;
  status: Status;
  statusText: string;
  description: string;
  environment: Environment;
};

const statuses: Record<Status, string> = {
  offline: 'text-neutral-500 bg-neutral-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
};

const environments: Record<Environment, string> = {
  preview: 'text-neutral-400 bg-neutral-400/10 ring-neutral-400/20',
  production: 'text-sky-400 bg-sky-400/10 ring-sky-400/30',
};

const deployments: Deployment[] = [
  {
    id: 1,
    projectName: 'react',
    teamName: 'facebook',
    status: 'offline',
    statusText: 'Commit 16h 23m ago',
    description: 'Deploys from GitHub',
    environment: 'production',
  },
  {
    id: 2,
    projectName: 'react-native',
    teamName: 'facebook',
    status: 'online',
    statusText: 'Commit 20h 34m ago',
    description: 'Deploys from GitHub',
    environment: 'preview',
  },
  {
    id: 3,
    projectName: 'zustand',
    teamName: 'pmndrs',
    status: 'online',
    statusText: 'Commit 18h 20m ago',
    description: 'Deploys from GitHub',
    environment: 'preview',
  },
  {
    id: 4,
    projectName: 'tailwindcss',
    teamName: 'tailwindlabs',
    status: 'error',
    statusText: 'Commit 22h 52m ago',
    description: 'Deploys from GitHub',
    environment: 'production',
  },
  {
    id: 5,
    projectName: 'react-navigation',
    teamName: 'react-navigation',
    status: 'online',
    statusText: 'Commit 23h 41m ago',
    description: 'Deploys from GitHub',
    environment: 'preview',
  },
  {
    id: 6,
    projectName: 'typescript',
    teamName: 'microsoft',
    status: 'error',
    statusText: 'Commit 1 day ago',
    description: 'Deploys from GitHub',
    environment: 'preview',
  },
  {
    id: 7,
    projectName: 'primitives',
    teamName: 'radix-ui',
    status: 'offline',
    statusText: 'Commit 2 days ago',
    description: 'Deploys from GitHub',
    environment: 'production',
  },
  {
    id: 8,
    projectName: 'table',
    teamName: 'tanstack',
    status: 'offline',
    statusText: 'Commit 3 days ago',
    description: 'Deploys from GitHub',
    environment: 'preview',
  },
  {
    id: 9,
    projectName: 'react-router',
    teamName: 'remix-run',
    status: 'offline',
    statusText: 'Commit 4 days ago',
    description: 'Deploys from GitHub',
    environment: 'production',
  },
  {
    id: 10,
    projectName: 'headlessui',
    teamName: 'tailwindlabs',
    status: 'offline',
    statusText: 'Commit one week ago',
    description: 'Deploys from GitHub',
    environment: 'preview',
  },
  // More deployments...
];

const activities = [
  {
    id: 1,
    user: {
      name: 'David Copper',
      imageUrl: imageRegistry.avatar1,
    },
    projectName: 'react-navigation',
    commit: '2d89f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 2,
    user: {
      name: 'Peter Parker',
      imageUrl: imageRegistry.avatar2,
    },
    projectName: 'zustand',
    commit: '96d5c7ce',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 3,
    user: {
      name: 'William Parker',
      imageUrl: imageRegistry.avatar3,
    },
    projectName: 'react',
    commit: '67d4c7ay',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 4,
    user: {
      name: 'Michael Kim',
      imageUrl: imageRegistry.avatar1,
    },
    projectName: 'typescript',
    commit: '1e23h0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 5,
    user: {
      name: 'Jackson Lee',
      imageUrl: imageRegistry.avatar4,
    },
    projectName: 'headlessui',
    commit: '8fe4d7ce',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 6,
    user: {
      name: 'Isabella Nguyen',
      imageUrl: imageRegistry.avatar5,
    },
    projectName: 'primitives',
    commit: '3c67f0c8',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 7,
    user: {
      name: 'Angelina Tran',
      imageUrl: imageRegistry.avatar5,
    },
    projectName: 'react-router',
    commit: '67v0c8d1',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 8,
    user: {
      name: 'Jacob Davis',
      imageUrl: imageRegistry.avatar6,
    },
    projectName: 'table',
    commit: '67d0d2a6',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 9,
    user: {
      name: 'Luke Smith',
      imageUrl: imageRegistry.avatar3,
    },
    projectName: 'tailwindcss',
    commit: '4ad0d2b4',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 10,
    user: {
      name: 'Jason Drake',
      imageUrl: imageRegistry.avatar4,
    },
    projectName: 'react',
    commit: 'abc67f0h',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
  {
    id: 11,
    user: {
      name: 'Michael Foster',
      imageUrl: imageRegistry.avatar3,
    },
    projectName: 'instagram',
    commit: 'cd6ab2b4',
    branch: 'main',
    date: '1h',
    dateTime: '2023-01-23T11:00',
  },
];

const filterMenuItems = [
  {
    id: 1,
    name: ' Name',
    href: '#',
    icon: UserIcon,
  },
  {
    id: 2,
    name: ' Date updated',
    href: '#',
    icon: ClockIcon,
  },
  {
    id: 3,
    name: ' Environment',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
];

export function Deployments() {
  console.log('rerender deployments');
  return (
    <>
      <section className="lg:mr-108">
        {/* Deployment filter */}
        <div className="flex w-full items-center justify-between border-b border-white/5 bg-neutral-900 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h1 className="text-base font-semibold leading-7 text-white">
            Deployments
          </h1>

          {/* Sort dropdown */}
          <Menu as="div" className="relative bg-neutral-900">
            <Menu.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-white">
              Sort by
              <ChevronUpDownIcon
                className="h-5 w-5 text-neutral-500"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-44 origin-top-right rounded-md border border-white/10 bg-neutral-900 py-2 shadow-lg ring-1 ring-neutral-900/5 focus:outline-none">
                {filterMenuItems.map((menuItem) => (
                  <Menu.Item key={menuItem.id}>
                    {({ active }) => (
                      <a
                        href={menuItem.href}
                        className={cn(
                          active
                            ? 'bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white'
                            : '',
                          'flex items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-300 transition'
                        )}
                      >
                        <menuItem.icon
                          className="mr-2 h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                        {menuItem.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Deployment list */}
        <ul role="list" className="divide-y divide-white/5 bg-neutral-900">
          {deployments.map((deployment) => (
            <li
              key={deployment.id}
              className="relative flex items-center justify-between space-x-4 px-4 py-4 sm:px-6 lg:px-8"
            >
              <div className="min-w-0 bg-neutral-900">
                <div className="flex items-center gap-x-3">
                  <div
                    className={cn(
                      statuses[deployment.status],
                      'flex-none rounded-full p-1'
                    )}
                  >
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                    <a className="flex gap-x-2">
                      <span className="truncate">{deployment.teamName}</span>
                      <span className="text-neutral-400">/</span>
                      <span className="whitespace-nowrap">
                        {deployment.projectName}
                      </span>
                      <span className="absolute inset-0" />
                    </a>
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-neutral-400">
                  <p className="truncate">{deployment.description}</p>
                  <svg
                    viewBox="0 0 2 2"
                    className="h-0.5 w-0.5 flex-none fill-neutral-300"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="whitespace-nowrap">{deployment.statusText}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div
                  className={cn(
                    environments[deployment.environment],
                    'rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset'
                  )}
                >
                  {deployment.environment}
                </div>

                <ChevronRightIcon
                  className="h-5 w-5 cursor-pointer text-neutral-400"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Activity feed */}
      <section className="bg-neutral-900 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-108 lg:overflow-y-auto lg:border-l lg:border-white/5">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-white">
            Activity feed
          </h2>
          <a href="#" className="text-sm font-semibold leading-6 text-sky-400">
            View all
          </a>
        </div>
        <ul role="list" className="divide-y divide-white/5 overflow-y-auto">
          {activities.map((activity) => (
            <li key={activity.id} className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-x-3">
                <img
                  src={activity.user.imageUrl}
                  alt="user"
                  className="h-6 w-6 flex-none rounded-full bg-neutral-800"
                />
                <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                  {activity.user.name}
                </h3>
                <time
                  dateTime={activity.dateTime}
                  className="flex-none text-xs text-neutral-600"
                >
                  {activity.date}
                </time>
              </div>
              <p className="mt-3 truncate text-sm text-neutral-500">
                Pushed to{' '}
                <span className="text-neutral-400">{activity.projectName}</span>{' '}
                (
                <span className="font-mono text-neutral-400">
                  {activity.commit}
                </span>{' '}
                on <span className="text-neutral-400">{activity.branch}</span>)
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
