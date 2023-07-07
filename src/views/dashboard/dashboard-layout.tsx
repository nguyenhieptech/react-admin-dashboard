import { imageRegistry } from '@/assets';
import { useSidebar, useTheme } from '@/hooks';
import { cn } from '@/utils';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/20/solid';
import {
  Cog6ToothIcon,
  FolderIcon,
  ServerIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', icon: FolderIcon },
  { name: 'Deployments', href: 'deployments', icon: ServerIcon },
  { name: 'Sign In', href: 'sign-in', icon: Cog6ToothIcon },
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
    current: false,
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
  { name: 'Profile', href: 'profile' },
  { name: 'Sign out', href: 'sign-in' },
];

export function DashboardLayout() {
  const sidebar = useSidebar();
  const { isDarkTheme, handleDarkTheme, handleLightTheme, handleSystemTheme } =
    useTheme();

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
            <div className="fixed inset-0 bg-neutral-900/80" />
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
                      className="-m-2.5 p-2.5"
                      onClick={sidebar.close}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <aside className="flex grow flex-col gap-y-2 overflow-y-auto bg-neutral-900 px-6 ring-1 ring-white/10">
                  <div className="mt-2 flex h-16 items-center text-xl font-bold text-white">
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
                                      ? 'bg-neutral-800 text-white'
                                      : 'text-neutral-400 hover:bg-neutral-800 hover:text-white',
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
                                  technology.current
                                    ? 'bg-neutral-800 text-white'
                                    : 'text-neutral-400 hover:bg-neutral-800 hover:text-white',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 text-[0.625rem] font-medium text-neutral-400 group-hover:text-white">
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
                          className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-neutral-800"
                        >
                          <img
                            className="h-8 w-8 rounded-full bg-neutral-800"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <span className="sr-only">Your profile</span>
                          <span aria-hidden="true">Hiep Nguyen</span>
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
      <aside className="hidden bg-neutral-900 xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
          <div className="mt-3 flex h-16 items-center text-xl font-bold text-white">
            Hiep Nguyen
          </div>
          <nav className="flex flex-1 flex-col" role="navigation">
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
                              ? 'bg-neutral-800 text-white'
                              : 'text-neutral-400 hover:bg-neutral-800 hover:text-white',
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
                          technology.current
                            ? 'bg-neutral-800 text-white'
                            : 'text-neutral-400 hover:bg-neutral-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 text-[0.625rem] font-medium text-neutral-400 group-hover:text-white">
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
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-neutral-800"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-neutral-800"
                    src={imageRegistry.avatar1}
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
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
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 px-4 shadow-sm dark:bg-neutral-900 sm:px-6 lg:px-8">
          {/* Hamburger icon to toggle mobile sidebar */}
          <button
            type="button"
            className="-m-2.5 p-2.5 text-white xl:hidden"
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
                  className="focus-visible:border-1 block h-9 w-80 rounded-md border border-neutral-700 bg-transparent px-2 py-0 pl-8 pr-0 text-sm text-white focus:ring-0 focus-visible:border-2 focus-visible:outline-none md:w-112"
                  placeholder="Search..."
                  type="text"
                  name="search"
                />
              </div>
            </form>
          </div>

          {/* Theme */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-2 pl-3.5 focus-visible:rounded-md focus-visible:border focus-visible:border-neutral-600 focus-visible:outline-none">
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
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-44 origin-top-right rounded-md border border-white/10 bg-neutral-900 py-2 shadow-lg ring-1 ring-neutral-900/5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={cn(
                        active
                          ? 'bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white'
                          : '',
                        'flex items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-300 transition'
                      )}
                      onClick={handleLightTheme}
                    >
                      <SunIcon
                        className="mr-2 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      Light
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={cn(
                        active
                          ? 'bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white'
                          : '',
                        'flex items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-300 transition'
                      )}
                      onClick={handleDarkTheme}
                    >
                      <MoonIcon
                        className="mr-2 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      Dark
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={cn(
                        active
                          ? 'bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white'
                          : '',
                        'flex items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-300 transition'
                      )}
                      onClick={handleSystemTheme}
                    >
                      <ComputerDesktopIcon
                        className="mr-2 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      System
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* User */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5 focus-visible:rounded-md focus-visible:border focus-visible:border-neutral-600 focus-visible:outline-none">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full bg-neutral-50"
                src={imageRegistry.avatar1}
                alt="avatar"
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
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <NavLink
                        to={item.href}
                        className={cn(
                          active
                            ? 'bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white'
                            : '',
                          'flex items-center space-x-6 px-3 py-1 text-sm font-normal leading-6 text-neutral-300 transition'
                        )}
                      >
                        {item.name}
                      </NavLink>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </header>

        {/* Children of Dashboard Layout */}
        <main role="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}
