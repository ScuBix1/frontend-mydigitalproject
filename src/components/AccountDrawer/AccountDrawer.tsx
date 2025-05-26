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
import TutorNavigation from './TutorNavigation/TutorNavigation';

interface AccountDrawerProps {
  className?: string;
}

const AccountDrawer = (props: AccountDrawerProps) => {
  const { className } = props;

  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild className={className}>
        <Button variant='header'>
          <i className='fa-solid fa-user '></i>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='p-0'>
          <DrawerTitle className='bg-[var(--curious-blue-800)] rounded-b-[30%] w-full min-h-[70px] flex flex-col items-center justify-center'>
            <Button variant='header'>
              <i className='fa-solid fa-user '></i>
            </Button>
          </DrawerTitle>
          <DrawerDescription className='text-h2 text-center'>
            Compte
          </DrawerDescription>
        </DrawerHeader>
        <TutorNavigation className='flex flex-col flex-1 justify-center mx-10' />
        <DrawerFooter>
          <img src='/assets/images/logo.png' alt='Maths et Magique' />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountDrawer;
