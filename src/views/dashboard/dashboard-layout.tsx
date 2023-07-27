import { imageRegistry } from '@/assets';
import { Avatar, AvatarFallback, AvatarImage } from '@/components';
import { useSidebar, useTheme } from '@/hooks';
import { cn } from '@/utils';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  // Cog6ToothIcon,
  ComputerDesktopIcon,
  FolderIcon,
  // FolderIcon,
  MoonIcon,
  ServerIcon,
  // ServerIcon,
  SunIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useMemo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: FolderIcon,
  },
  {
    name: 'Deployments',
    href: 'deployments',
    icon: ServerIcon,
  },
  {
    name: 'Sign In',
    href: 'sign-in',
    icon: Cog6ToothIcon,
  },
];

const technologies = [
  {
    id: 1,
    name: 'React',
    href: 'https://react.dev/',
    initial: 'R',
  },
  {
    id: 2,
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    initial: 'T',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    initial: 'T',
  },
  {
    id: 4,
    name: 'Headless UI',
    href: 'https://headlessui.com/',
    initial: 'H',
  },
  {
    id: 5,
    name: 'Radix Primitives',
    href: 'https://www.radix-ui.com/',
    initial: 'R',
  },
  {
    id: 6,
    name: 'Tanstack Table',
    href: 'https://tanstack.com/table/v8',
    initial: 'T',
  },
  {
    id: 7,
    name: 'Vite',
    href: 'https://vitejs.dev/',
    initial: 'V',
  },
];

const userNavigation = [
  {
    name: 'Profile',
    href: 'profile',
    icon: <UserIcon className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />,
  },
  {
    name: 'Sign out',
    href: 'sign-in',
    icon: (
      <ArrowLeftOnRectangleIcon
        className="mr-2 h-4 w-4 shrink-0"
        aria-hidden="true"
      />
    ),
  },
];

export function DashboardLayout() {
  const sidebar = useSidebar();
  const { isDarkTheme, handleDarkTheme, handleLightTheme, handleSystemTheme } =
    useTheme();

  const themeOptions = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Light',
        icon: <SunIcon className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />,
        handler: handleLightTheme,
      },
      {
        id: 2,
        name: 'Dark',
        icon: <MoonIcon className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />,
        handler: handleDarkTheme,
      },
      {
        id: 3,
        name: 'System',
        icon: (
          <ComputerDesktopIcon
            className="mr-2 h-4 w-4 shrink-0"
            aria-hidden="true"
          />
        ),
        handler: handleSystemTheme,
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Dynamic sidebar for smaller devices */}
      <Transition.Root show={sidebar.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 xl:hidden"
          onClose={sidebar.close}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900/60" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 focus:outline-neutral-900"
                      onClick={sidebar.close}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-neutral-900 dark:text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <aside className="flex grow flex-col gap-y-2 overflow-y-auto bg-white px-6 ring-1 ring-white/10 dark:bg-neutral-900">
                  <div className="mt-2 flex h-16 items-center text-xl font-bold text-primary-600 dark:text-primary-400">
                    Hiep Nguyen
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((nav) => (
                            <li key={nav.name}>
                              <NavLink
                                to={nav.href}
                                onClick={sidebar.close}
                                className={({ isActive }) => {
                                  return cn(
                                    isActive
                                      ? 'bg-primary-500 text-white dark:bg-primary-600'
                                      : 'text-neutral-700 hover:bg-primary-500 hover:text-white dark:text-neutral-300 dark:hover:bg-primary-600 dark:hover:text-white',
                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-all'
                                  );
                                }}
                              >
                                <nav.icon className="h-5 w-5 shrink-0" />
                                {nav.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-neutral-400">
                          Technologies
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {technologies.map((technology) => (
                            <li key={technology.name}>
                              <a
                                href={technology.href}
                                target="_blank"
                                className={cn(
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 transition',
                                  'text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 text-[0.625rem] font-medium dark:border-neutral-700 dark:bg-neutral-800">
                                  {technology.initial}
                                </span>
                                <span className="truncate">
                                  {technology.name}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="-mx-6 mt-auto">
                        <a
                          href="#"
                          className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-neutral-800 transition-all hover:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Avatar>
                            <AvatarImage
                              src={imageRegistry.avatar1}
                              alt="avatar"
                            />
                            <AvatarFallback className="bg-neutral-700 text-white">
                              HN
                            </AvatarFallback>
                          </Avatar>
                          <span
                            aria-hidden="true"
                            className="text-neutral-800 dark:text-neutral-100"
                          >
                            Hiep Nguyen
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <aside className="hidden bg-neutral-50 dark:bg-neutral-900 xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-2 overflow-y-auto border-r px-6 ring-1 ring-white/5 dark:border-0">
          <div className="mt-3 flex h-16 items-center text-xl font-bold text-primary-500 dark:text-primary-400">
            Hiep Nguyen
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((nav) => (
                    <li key={nav.name}>
                      <NavLink
                        to={nav.href}
                        className={({ isActive }) => {
                          return cn(
                            isActive
                              ? 'bg-primary-500 text-white dark:bg-primary-600'
                              : 'text-neutral-700 hover:bg-primary-500 hover:text-white dark:text-neutral-300 dark:hover:bg-primary-600 dark:hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-all'
                          );
                        }}
                      >
                        <nav.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {nav.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-neutral-400">
                  Technologies
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {technologies.map((technology) => (
                    <li key={technology.name}>
                      <a
                        href={technology.href}
                        target="_blank"
                        className={cn(
                          'group flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 transition',
                          'text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 text-[0.625rem] font-medium dark:border-neutral-700 dark:bg-neutral-800">
                          {technology.initial}
                        </span>
                        <span className="truncate">{technology.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-neutral-800 transition-all hover:bg-neutral-200 dark:text-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Avatar>
                    <AvatarImage src={imageRegistry.avatar1} alt="avatar" />
                    <AvatarFallback className="bg-neutral-700 text-white">
                      HN
                    </AvatarFallback>
                  </Avatar>
                  <span aria-hidden="true">Hiep Nguyen</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content */}
      <div className="xl:ml-72">
        {/* Sticky header */}
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-neutral-100 bg-white px-4 dark:border-white/5 dark:bg-neutral-900 sm:px-6 lg:px-7">
          {/* Hamburger icon to toggle mobile sidebar */}
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 focus-within:outline-1 focus:outline-neutral-900 xl:hidden"
            onClick={sidebar.open}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Search input */}
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form className="flex flex-1">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative flex w-full items-center">
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-neutral-500"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-9 w-80 rounded-md border border-neutral-200 bg-transparent px-2 py-0 pl-8 pr-0 text-sm text-white shadow-sm transition focus:border-neutral-400 focus:outline-none focus:ring-0 dark:border-neutral-800 dark:focus:border-neutral-600 md:w-112"
                  placeholder="Search..."
                  type="text"
                  name="search"
                />
              </div>
            </form>
          </div>

          {/* Theme switch */}
          <Menu as="div" className="relative">
            <Menu.Button className="-mb-1 flex items-center p-2 pl-3.5 focus-visible:rounded-md focus-visible:border focus-visible:border-neutral-600 focus-visible:outline-none">
              <span className="sr-only">Theme</span>
              {isDarkTheme ? (
                <MoonIcon
                  className="mr-2 h-5 w-5 shrink-0 text-white"
                  aria-hidden="true"
                />
              ) : (
                <SunIcon
                  className="mr-2 h-5 w-5 shrink-0 text-neutral-900"
                  aria-hidden="true"
                />
              )}
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
                {themeOptions.map((themeOption) => (
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={cn(
                          active
                            ? 'bg-neutral-100 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white'
                            : '',
                          'flex cursor-pointer items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-900 transition dark:text-neutral-300'
                        )}
                        onClick={themeOption.handler}
                      >
                        {themeOption.icon}
                        {themeOption.name}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          {/* User */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5 focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <Avatar>
                <AvatarImage src={imageRegistry.avatar1} alt="avatar" />
                <AvatarFallback className="bg-neutral-700 text-white">
                  HN
                </AvatarFallback>
              </Avatar>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md border border-neutral-300 bg-white py-2 shadow-sm outline-none focus:outline-none dark:border-white/10 dark:bg-neutral-900">
                {userNavigation.map((userNav) => (
                  <Menu.Item key={userNav.name}>
                    {({ active }) => (
                      <NavLink
                        to={userNav.href}
                        className={cn(
                          active
                            ? 'bg-neutral-100 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white'
                            : '',
                          'flex items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-900 transition dark:text-neutral-300'
                        )}
                      >
                        {userNav.icon}
                        {userNav.name}
                      </NavLink>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </header>

        {/* Children of Dashboard Layout */}
        <main role="main" className="h-full bg-white dark:bg-black">
          <Outlet />
        </main>
      </div>
    </>
  );
}
