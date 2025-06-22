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
  isStudent?: boolean;
  headerBackgroundColor?: string;
  path?:
    | 'wizard.png'
    | 'ladybug.png'
    | 'robot.png'
    | 'zebra.png'
    | 'cat.png'
    | 'cloud.png';
}

const Header = (props: HeaderProps) => {
  const {
    className,
    isDashboard,
    isTutor,
    isStudent,
    headerBackgroundColor,
    children,
    path,
  } = props;

  return (
    <div
      className={cn(
        'w-full min-h-[80px] bg-[var(--curious-blue-800)] rounded-b-[20%] sticky top-0 flex justify-around items-center px-4 z-[9999]',
        className
      )}
      style={{ backgroundColor: headerBackgroundColor }}
    >
      {isDashboard ? (
        <MenuDrawer
          isStudent={isStudent}
          headerBackgroundColor={headerBackgroundColor}
        />
      ) : isTutor ? (
        <Button variant='header' asChild>
          <Link to='/tutor/dashboard'>
            <ArrowLeft className='w-[30px] h-[30px]' />
          </Link>
        </Button>
      ) : (
        <Button variant='header' asChild>
          <Link to='/student/dashboard'>
            <ArrowLeft className='w-[30px] h-[30px]' />
          </Link>
        </Button>
      )}

      <div className='flex-1 flex justify-center items-center'>{children}</div>
      <AccountDrawer
        isStudent={isStudent}
        path={path}
        headerBackgroundColor={headerBackgroundColor}
      />
    </div>
  );
};

export default Header;
