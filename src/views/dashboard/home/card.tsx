import { HomeCardData } from '@/types';

type CardProps = HomeCardData;

export function Card(props: CardProps) {
  const {
    title = 'Total Revenue',
    value = '$45,231.89',
    description = '+20.1% from last month',
  } = props;

  return (
    <div className="flex h-32 cursor-pointer flex-col justify-center rounded-md border border-neutral-700 p-4 transition hover:bg-neutral-800">
      <div className="flex">
        <div className="text-sm font-medium text-neutral-300">{title}</div>
      </div>
      <div className="mt-1 flex flex-col">
        <span className="text-2xl font-bold text-neutral-100">{value}</span>
        <span className="text-xs text-neutral-400">{description}</span>
      </div>
    </div>
  );
}
