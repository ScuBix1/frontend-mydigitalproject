import Button from '@/components/Button/Button';
import Avatar from '../Avatar/Avatar';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import StudentNavigation from './StudentNavigation/StudentNavigation';
import TutorNavigation from './TutorNavigation/TutorNavigation';

interface AccountDrawerProps {
  className?: string;
  isStudent?: boolean;
  path?:
    | 'wizard.png'
    | 'ladybug.png'
    | 'robot.png'
    | 'zebra.png'
    | 'cat.png'
    | 'cloud.png';
}

const AccountDrawer = (props: AccountDrawerProps) => {
  const { className, isStudent, path } = props;
  const navigationLinkClassName = 'flex flex-col flex-1 justify-center mx-10';

  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild className={className}>
        <Button variant='header'>
          <i className='fa-solid fa-user '></i>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='z-[99999]'>
        <DrawerHeader className='p-0'>
          {!isStudent ? (
            <DrawerTitle className='bg-[var(--curious-blue-800)] rounded-b-[30%] w-full min-h-[70px] flex flex-col items-center justify-center'>
              <Button variant='header'>
                <i className='fa-solid fa-user '></i>
              </Button>
            </DrawerTitle>
          ) : (
            <DrawerTitle className='bg-[var(--curious-blue-800)] rounded-b-[30%] w-full min-h-[70px] flex flex-col items-center justify-center'>
              <Avatar path={path} />
            </DrawerTitle>
          )}
          <DrawerDescription className='text-h2 text-center'>
            Compte
          </DrawerDescription>
        </DrawerHeader>
        {!isStudent ? (
          <TutorNavigation className={navigationLinkClassName} />
        ) : (
          <StudentNavigation className={navigationLinkClassName} />
        )}
        <DrawerFooter>
          <img src='/assets/images/logo.png' alt='Maths et Magique' />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountDrawer;
