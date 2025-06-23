import Home from '@/assets/icons/Home';
import Button from '@/components/Button/Button';
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

interface MenuDrawerProps {
  className?: string;
  isStudent?: boolean;
  headerBackgroundColor?: string;
}

const MenuDrawer = (props: MenuDrawerProps) => {
  const { className, isStudent, headerBackgroundColor } = props;
  const navigationLinkClassName = 'flex flex-col flex-1 justify-center mx-10';

  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild className={className}>
        <Button variant='header'>
          <Home className='w-[30px] h-[30px]' />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='z-[99999]'>
        <DrawerHeader className='p-0'>
          <DrawerTitle
            className='bg-[var(--curious-blue-800)] rounded-b-[30%] w-full min-h-[130px] flex flex-col items-center justify-center'
            style={{ backgroundColor: headerBackgroundColor }}
          >
            <Button variant='header'>
              <Home className='w-[30px] h-[30px]' />
            </Button>
          </DrawerTitle>
          <DrawerDescription className='text-h2 text-center'>
            Menu
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

export default MenuDrawer;
