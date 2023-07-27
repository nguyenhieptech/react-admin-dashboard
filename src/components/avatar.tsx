// https://ui.shadcn.com/docs/components/avatar

import { cn } from '@/utils';
import * as RadixAvatar from '@radix-ui/react-avatar';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

type AvatarRef = ElementRef<typeof RadixAvatar.Root>;
type AvatarProps = ComponentPropsWithoutRef<typeof RadixAvatar.Root>;

type AvatarImageRef = ElementRef<typeof RadixAvatar.Image>;
type AvatarImageProps = ComponentPropsWithoutRef<typeof RadixAvatar.Image>;

type AvatarFallbackRef = ElementRef<typeof RadixAvatar.Fallback>;
type AvatarFallbackProps = ComponentPropsWithoutRef<
  typeof RadixAvatar.Fallback
>;

const Avatar = forwardRef<AvatarRef, AvatarProps>(
  ({ className, ...props }, ref) => (
    <RadixAvatar.Root
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  )
);
Avatar.displayName = RadixAvatar.Root.displayName;

const AvatarImage = forwardRef<AvatarImageRef, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <RadixAvatar.Image
      ref={ref}
      className={cn('h-full w-full rounded-full bg-neutral-800', className)}
      {...props}
    />
  )
);
AvatarImage.displayName = RadixAvatar.Image.displayName;

const AvatarFallback = forwardRef<AvatarFallbackRef, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <RadixAvatar.Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  )
);

export { Avatar, AvatarFallback, AvatarImage };
