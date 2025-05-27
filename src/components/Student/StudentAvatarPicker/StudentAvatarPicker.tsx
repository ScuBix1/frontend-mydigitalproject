import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
}

const AvatarPicker = (props: AvatarPickerProps) => {
  const { onAvatarSelect, selectedAvatar } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='header' className='border border-black'>
          <img
            src={`/avatars/${selectedAvatar}`}
            alt='Avatar actuel'
            className='w-[80px] h-[80px] object-cover'
          />
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[400px]' aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Choisis ton avatar</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-3 gap-4'>
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
      </DialogContent>
    </Dialog>
  );
};

export default AvatarPicker;
