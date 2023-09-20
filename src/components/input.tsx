import { cn } from '@/utils';
import { forwardRef, InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-9 w-full rounded-md border bg-transparent px-3 text-sm text-neutral-900 transition',
        // TODO: style <input type="file" />
        'file:border-1 file:items-center file:border-neutral-100 file:bg-transparent file:py-1 file:text-sm file:font-medium file:text-neutral-900 dark:file:text-white',
        'placeholder:text-neutral-400 placeholder-shown:text-sm',
        'focus:outline-none focus-visible:border-2 focus-visible:border-primary-300 dark:focus-visible:border-primary-500',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'dark:border-neutral-700 dark:text-white dark:focus:border-neutral-600',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
