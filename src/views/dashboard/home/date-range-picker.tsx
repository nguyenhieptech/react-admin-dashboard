import { Popover, Transition } from '@headlessui/react';
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { addDays, format } from 'date-fns';
import { Fragment, useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function DateRangePicker() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 6, 20),
    to: addDays(new Date(2023, 7, 20), 20),
  });

  // https://headlessui.com/react/popover
  return (
    <Popover className="relative">
      <Popover.Button className="flex-start flex w-64 cursor-pointer rounded-md border border-neutral-200 px-3 py-2 transition hover:border-neutral-300 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:hover:bg-neutral-800 dark:focus:border-neutral-600">
        <CalendarDaysIcon className="mr-2 h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        {/* https://github.com/shadcn/ui/blob/main/apps/www/app/examples/dashboard/components/date-range-picker.tsx#L38-L49 */}
        {date?.from ? (
          date.to ? (
            <span className="text-sm text-neutral-500 dark:text-neutral-100">
              {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
            </span>
          ) : (
            <span className="text-sm text-neutral-500 dark:text-neutral-100">
              {format(date.from, 'LLL dd, y')}
            </span>
          )
        ) : (
          <span className="text-sm text-neutral-500 dark:text-neutral-100">
            Pick a date
          </span>
        )}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="focus-within::outline-none absolute left-0 z-20 mt-2 transform rounded-md border border-neutral-200 bg-white px-0 shadow-sm dark:border-neutral-700 dark:bg-neutral-900 sm:max-w-xl lg:-translate-x-[55%]">
          <DayPicker
            className="rounded-md p-2 text-neutral-900 focus:outline-none dark:bg-neutral-900 dark:text-neutral-100"
            classNames={{
              months:
                'flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0',
              month: 'space-y-4',
              caption: 'relative flex items-center justify-center pt-1',
              caption_label: 'text-sm font-medium',
              nav: 'flex items-center space-x-1',
              nav_button:
                'h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100',
              nav_button_previous: 'absolute left-1',
              nav_button_next: 'absolute right-1',
              table: 'w-full border-collapse space-y-1',
              head_row: 'flex',
              head_cell: 'text-neutral-500 w-9 rounded-md text-xs font-normal',
              row: 'mt-2 flex w-full',
              cell: 'focus-within:z-20 relative p-0 text-center text-sm focus-within:relative transition rounded-sm',
              day: 'h-8 w-9 p-0 font-normal aria-selected:opacity-100',
              day_selected:
                'bg-primary-500 dark:bg-primary-600 text-neutral-100 hover:bg-primary-500 hover:text-neutral-100 rounded-sm transition',
              day_outside: 'opacity-50',
              day_disabled: 'opacity-50',
              day_range_start: 'rounded-none',
              day_range_middle:
                'aria-selected:bg-primary-500 dark:aria-selected:bg-primary-600 aria-selected:text-neutral-100 rounded-sm',
              day_hidden: 'invisible',
            }}
            components={{
              IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
              IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
            }}
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            showOutsideDays={true}
            pagedNavigation
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
