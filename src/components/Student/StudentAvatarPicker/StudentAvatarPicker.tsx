import Pen from '@/assets/icons/Pen';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../../Button/Button';

const avatars = [
  'wizard.png',
  'robot.png',
  'ladybug.png',
  'cloud.png',
  'cat.png',
  'zebra.png',
];

interface AvatarPickerProps {
  onAvatarSelect: (avatar: string) => void;
  selectedAvatar: string;
  className?: string;
}

const AvatarPicker = (props: AvatarPickerProps) => {
  const { onAvatarSelect, selectedAvatar, className } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='header'
          className={cn('border border-black relative', className)}
        >
          <img
            src={`/avatars/${selectedAvatar}`}
            alt='Avatar actuel'
            className='w-[80px] h-[80px] object-cover'
          />
          <Pen className='absolute top-0 right-0 w-[30px] h-[30px]' />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[400px]' aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Choisis ton avatar</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-2 gap-4 justify-center md:grid-cols-3'>
            {avatars.map((avatar) => (
              <Button
                key={avatar}
                variant='header'
                onClick={() => {
                  onAvatarSelect(avatar);
                  setOpen(false);
                }}
                className={clsx(
                  'border border-black',
                  selectedAvatar === avatar && 'border-orange-500'
                )}
              >
                <img
                  src={`/avatars/${avatar}`}
                  alt={avatar}
                  className='w-[70px] h-[70px] object-cover'
                />
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarPicker;
