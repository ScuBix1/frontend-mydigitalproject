import Button from '@/components/Button/Button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

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
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AccountDrawer;
