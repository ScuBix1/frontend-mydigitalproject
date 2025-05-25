import Grid from '@/assets/icons/Grid';
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

interface MenuDrawerProps {
  className?: string;
}

const MenuDrawer = (props: MenuDrawerProps) => {
  const { className } = props;

  return (
    <Drawer direction='left'>
      <DrawerTrigger asChild className={className}>
        <Button variant='header'>
          <Grid className='w-[15px] h-[15px]' />
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

export default MenuDrawer;
