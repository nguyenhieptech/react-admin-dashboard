// https://ui.shadcn.com/docs/components/checkbox

import { cn } from '@/utils';
import { CheckIcon } from '@heroicons/react/20/solid';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'ring-offset-background focus-visible:ring-ring data-[state=checked]:text-primary-foreground peer h-4 w-4 shrink-0 rounded-sm border border-neutral-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 dark:border-neutral-500',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon className="h-3 w-3 text-neutral-50 dark:text-neutral-50" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
