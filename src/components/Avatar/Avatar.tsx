import getInitials from '@/lib/getInitials';
import { cn } from '@/lib/utils';

interface AvatarProps {
  className?: string;
  firstname?: string;
  lastname?: string;
  path?:
    | 'wizard.png'
    | 'ladybug.png'
    | 'robot.png'
    | 'zebra.png'
    | 'cat.png'
    | 'cloud.png';
}

const Avatar = (props: AvatarProps) => {
  const { className, firstname, lastname, path } = props;
  return (
    <div
      className={cn(
        'rounded-full bg-[var(--background-secondary)] w-[45px] h-[45px] flex justify-center items-center overflow-hidden p-1',
        className
      )}
    >
      {!path ? (
        getInitials(firstname, lastname)
      ) : (
        <img
          src={`/avatars/${path}`}
          alt="photo de l'avatar"
          className='object-scale-down w-[120px] h-[120px]'
        />
      )}
    </div>
  );
};

export default Avatar;
