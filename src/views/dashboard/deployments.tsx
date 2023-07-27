import { imageRegistry } from '@/assets';
import { cn } from '@/utils';
import { Menu, Transition } from '@headlessui/react';
import { ChevronRightIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import {
  ClockIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
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

// TODO: convert to use cva instead
const statuses: Record<Status, string> = {
  offline: 'text-neutral-500 bg-neutral-100 dark:bg-neutral-100/10',
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
    icon: UserIcon,
  },
  {
    id: 2,
    name: ' Date updated',
    icon: ClockIcon,
  },
  {
    id: 3,
    name: ' Environment',
    icon: WrenchScrewdriverIcon,
  },
];

export function Deployments() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <section className="lg:mr-108">
        {/* Deployment filter */}
        <div className="flex w-full items-center justify-between border-b border-neutral-100 px-4 py-4 dark:border-neutral-800 sm:px-6 sm:py-6 lg:px-8">
          <h1 className="font-semibold leading-7 text-neutral-900 dark:text-white">
            Deployments
          </h1>

          {/* Sort dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-neutral-900 dark:text-white">
              Sort by
              <ChevronUpDownIcon
                className="h-5 w-5 text-neutral-500"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-44 origin-top-right rounded-md border border-neutral-300 bg-white py-2 shadow-sm focus:outline-none dark:border-white/10 dark:bg-neutral-900">
                {filterMenuItems.map((menuItem) => (
                  <Menu.Item key={menuItem.id}>
                    {({ active }) => (
                      <div
                        className={cn(
                          active
                            ? 'bg-neutral-100 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white'
                            : '',
                          'flex cursor-pointer items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-900 transition dark:text-neutral-300'
                        )}
                      >
                        <menuItem.icon
                          className="mr-2 h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                        {menuItem.name}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* Deployment list */}
        <ul
          role="list"
          className="divide-y divide-neutral-100 dark:divide-neutral-800"
        >
          {deployments.map((deployment) => (
            <li
              key={deployment.id}
              className="relative flex items-center justify-between space-x-4 px-4 py-4 sm:px-6 lg:px-8"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-x-3">
                  <div
                    className={cn(
                      statuses[deployment.status],
                      'flex-none rounded-full p-1'
                    )}
                  >
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
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
                  <div className="h-0.5 w-0.5 flex-none bg-neutral-400" />
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
      <section className="lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-108 lg:overflow-y-auto lg:border-l lg:border-neutral-100 dark:lg:border-neutral-800">
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-4 dark:border-neutral-800 sm:px-6 sm:py-6 lg:px-8">
          <h2 className="text-base font-semibold leading-7 text-neutral-900 dark:text-white">
            Activity feed
          </h2>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400"
          >
            View all
          </a>
        </div>
        <ul
          role="list"
          className="divide-y divide-neutral-100 overflow-y-auto dark:divide-neutral-800"
        >
          {activities.map((activity) => (
            <li key={activity.id} className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-x-3">
                <img
                  src={activity.user.imageUrl}
                  alt="user"
                  className="h-6 w-6 flex-none rounded-full bg-neutral-800"
                />
                <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-neutral-900 dark:text-white">
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
    </div>
  );
}
