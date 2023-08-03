// https://ui.shadcn.com/docs/components/label

import { cn } from '@/utils';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

type LabelRef = ElementRef<typeof LabelPrimitive.Root>;
type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

const Label = forwardRef<LabelRef, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
