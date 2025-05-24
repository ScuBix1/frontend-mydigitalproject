import { cn } from '@/lib/utils';
import { PropsWithChildren, ReactNode } from 'react';

interface PanelProps extends PropsWithChildren {
  className?: string;
  title?: ReactNode;
}

const Panel = (props: PanelProps) => {
  const { className, title, children } = props;
  return (
    <div
      className={cn(
        'min-w-[280px] max-w-[640px] bg-[var(--background-primary)] min-h-[50px] h-full border-[var(--background-secondary)] border-4 rounded-[20px] p-3 flex flex-col gap-y-6 sm:p-8',
        className
      )}
    >
      <div className='flex justify-between gap-9'>{title}</div>
      {children}
    </div>
  );
};

export default Panel;
