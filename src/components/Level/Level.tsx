import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

interface LevelProps extends PropsWithChildren {
  className?: string;
  isDisabled?: boolean;
  isLast?: boolean;
  color?: string;
  path?: string;
}

const Level = (props: LevelProps) => {
  const { className, isDisabled, isLast, color, path, children } = props;
  const navigate = useNavigate();

  const handleClick = (path?: string) => {
    if (!path) return null;
    navigate(`${path}`);
  };

  return (
    <div
      className={cn(
        'relative bg-[var(--blue-primary)] w-[150px] h-[150px] flex flex-col items-center justify-center rounded-xl p-4 cursor-pointer',
        { 'bg-[var(--background-secondary)] cursor-default': isDisabled },
        className
      )}
      style={!isDisabled ? { backgroundColor: color } : undefined}
      onClick={() => handleClick(path)}
    >
      {!isDisabled && <>{children}</>}
      {isDisabled && (
        <div className='opacity-50 flex flex-col items-center justify-center'>
          {children}
          <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-full'>
            <img src='/assets/images/lock.png' alt='cadenas' />
          </div>
        </div>
      )}
      {isLast && (
        <div className='absolute right-0 top-0 w-[80px] h-[80px] -translate-y-1/2 translate-x-5/12'>
          <img src='/assets/images/star.png' alt='étoile' />
        </div>
      )}
    </div>
  );
};

export default Level;
