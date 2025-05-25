import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import AccountDrawer from '../AccountDrawer/AccountDrawer';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header = (props: HeaderProps) => {
  const { className, children } = props;

  return (
    <div
      className={cn(
        'w-full min-h-[80px] bg-[var(--curious-blue-800)] rounded-b-[20%] mb-20 sticky top-0 flex justify-around items-center px-4',
        className
      )}
    >
      <MenuDrawer />
      <div className='flex-1'>{children}</div>
      <AccountDrawer />
    </div>
  );
};

export default Header;
