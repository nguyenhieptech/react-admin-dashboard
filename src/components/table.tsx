import { cn } from '@/utils';
import { HTMLAttributes, forwardRef } from 'react';

type TableRef = HTMLTableElement;
type TableProps = HTMLAttributes<HTMLTableElement>;

const Table = forwardRef<TableRef, TableProps>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        'w-full caption-bottom border border-neutral-200 text-sm dark:border-neutral-700',
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

type TableHeaderRef = HTMLTableSectionElement;
type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

const TableHeader = forwardRef<TableHeaderRef, TableHeaderProps>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

type TableBodyRef = HTMLTableSectionElement;
type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

const TableBody = forwardRef<TableBodyRef, TableBodyProps>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
));
TableBody.displayName = 'TableBody';

type TableFooterRef = HTMLTableSectionElement;
type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

const TableFooter = forwardRef<TableFooterRef, TableFooterProps>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'bg-neutral-800 font-medium text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

type TableRowRef = HTMLTableRowElement;
type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

const TableRow = forwardRef<TableRowRef, TableRowProps>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border border-neutral-200 transition duration-100 hover:bg-neutral-100 data-[state=selected]:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

type TableHeadRef = HTMLTableCellElement;
type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement>;

const TableHead = forwardRef<TableHeadRef, TableHeadProps>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

type TableCellRef = HTMLTableCellElement;
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

const TableCell = forwardRef<TableCellRef, TableCellProps>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props} />
));
TableCell.displayName = 'TableCell';

type TableCaptionRef = HTMLTableCaptionElement;
type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

const TableCaption = forwardRef<TableCaptionRef, TableCaptionProps>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-neutral-500 dark:text-neutral-400', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
