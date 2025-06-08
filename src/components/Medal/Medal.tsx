import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface MedalProps extends PropsWithChildren {
  className?: string;
  isReceived?: boolean;
}

const Medal = (props: MedalProps) => {
  const { className, isReceived, children } = props;

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-[100px] h-[100px] border border-[var(--text-foreground)] border-1 border-dashed rounded-xl',
        className
      )}
    >
      {isReceived ? (
        <>{children}</>
      ) : (
        <div className='text-[90px] text-walter'>?</div>
      )}
    </div>
  );
};

export default Medal;
