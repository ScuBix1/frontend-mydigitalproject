import ArrowLeft from '@/assets/icons/ArrowLeft';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import AccountDrawer from '../AccountDrawer/AccountDrawer';
import Button from '../Button/Button';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

interface HeaderProps extends PropsWithChildren {
  className?: string;
  isDashboard?: boolean;
  isTutor?: boolean;
}

const Header = (props: HeaderProps) => {
  const { className, isDashboard = false, isTutor = false, children } = props;

  return (
    <div
      className={cn(
        'w-full min-h-[80px] bg-[var(--curious-blue-800)] rounded-b-[20%] sticky top-0 flex justify-around items-center px-4 z-[9999]',
        className
      )}
    >
      {isDashboard ? (
        <MenuDrawer />
      ) : (
        isTutor && (
          <Button variant='header' asChild>
            <Link to='/tutor/dashboard'>
              <ArrowLeft className='w-[15px] h-[15px]' />
            </Link>
          </Button>
        )
      )}

      <div className='flex-1 flex justify-center items-center'>{children}</div>
      <AccountDrawer />
    </div>
  );
};

export default Header;
