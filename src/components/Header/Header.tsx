import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header = (props: HeaderProps) => {
  const { className, children } = props;

  return (
    <div
      className={cn(
        'w-full min-h-[80px] bg-[var(--curious-blue-800)] rounded-b-[20%]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Header;
