import Grid from '@/assets/icons/Grid';
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
          <Grid className='w-[15px] h-[15px]' />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='z-[99999]'>
        <DrawerHeader className='p-0'>
          <DrawerTitle
            className='bg-[var(--curious-blue-800)] rounded-b-[30%] w-full min-h-[70px] flex flex-col items-center justify-center'
            style={{ backgroundColor: headerBackgroundColor }}
          >
            <Button variant='header'>
              <Grid className='w-[15px] h-[15px]' />
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
