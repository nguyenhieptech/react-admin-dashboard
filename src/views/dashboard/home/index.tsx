import { imageRegistry } from '@/assets';
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  PresentationChartBarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Chart } from './chart';
import { DateRangePicker } from './date-range-picker';

const homeCardsData = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$45,231.89',
    description: '+20.1% from last month',
    icon: CurrencyDollarIcon,
  },
  {
    id: 2,
    title: 'Subscriptions',
    value: '+2350',
    description: '+190.1% from last month',
    icon: PresentationChartBarIcon,
  },
  {
    id: 3,
    title: 'Sales',
    value: '+11,256',
    description: '+20.1% from last month',
    icon: ChartBarIcon,
  },
  {
    id: 4,
    title: 'Active Now',
    value: '+573',
    description: '+153 since last hour',
    icon: UserIcon,
  },
];

const homeRecentSalesData = [
  {
    img: imageRegistry.avatar2,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    sale: '+$999.00',
  },
  {
    img: imageRegistry.avatar3,
    name: 'Jackson Lee',
    email: 'jackson@email.com',
    sale: '+$1,678.00',
  },
  {
    img: imageRegistry.avatar4,
    name: 'William Kim',
    email: 'will@email.com',
    sale: '+$549.00',
  },
  {
    img: imageRegistry.avatar5,
    name: 'Sofia Davis',
    email: 'sofia@email.com',
    sale: '+$767.00',
  },
  {
    img: imageRegistry.avatar6,
    name: 'Peter Parker',
    email: 'peter@email.com',
    sale: '+$409.00',
  },
];

export function Home() {
  return (
    <div className="h-full bg-white p-6 dark:bg-neutral-900">
      <div className="flex flex-col items-start justify-between lg:flex-row">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Dashboard
        </h2>
        {/* Date Range Picker / Date Picker */}
        <div className="mt-2 flex flex-col flex-wrap space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
          <DateRangePicker />
          <Button>Download</Button>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeCardsData.map((card) => (
          <div
            key={card.id}
            className="flex h-32 cursor-pointer flex-col justify-center rounded-md border border-neutral-200 px-6 shadow-sm transition hover:border-neutral-400 dark:border-neutral-800 dark:shadow-none dark:hover:border-neutral-600"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-300">
                {card.title}
              </div>
              <div>
                <card.icon
                  className="h-5 w-5 shrink-0 font-normal text-neutral-500 dark:text-neutral-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="mt-1 flex flex-col">
              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {card.value}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {card.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Chart */}
        <div className="rounded-md border border-neutral-200 p-4 shadow-sm dark:border-neutral-800">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            Overview
          </p>
          <Chart />
        </div>

        {/* Recent sales */}
        <div className="rounded-md border border-neutral-200 px-6 py-4 shadow-sm dark:border-neutral-800">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            Recent Sales
          </p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            You made 194 sales this month.
          </p>
          <div className="mt-4 space-y-2">
            {homeRecentSalesData.map((recentSale) => (
              <div className="flex cursor-pointer items-center justify-between rounded-md p-2 transition hover:bg-neutral-50 dark:hover:bg-neutral-800">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={recentSale.img} alt="avatar" />
                    <AvatarFallback>HN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {recentSale.name}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {recentSale.email}
                    </p>
                  </div>
                </div>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {recentSale.sale}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
