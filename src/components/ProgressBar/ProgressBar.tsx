import clsx from 'clsx';

interface ProgressBarProps {
  className?: string;
  progress?: number;
  variant?: 'student' | 'loading';
}

const ProgressBar = (props: ProgressBarProps) => {
  const { className, progress = 0, variant = 'loading' } = props;

  return (
    <div
      className={clsx(
        'h-[10px] min-w-[180px] w-[180px] bg-[var(--blue-primary)] rounded-full overflow-hidden sm:min-w-[280px] sm:w-[280px] sm:w-1/3',
        {
          'bg-[var(--gray-tertiary)] min-w-full w-full sm:min-w-full sm:w-full':
            variant === 'student',
        },
        className
      )}
    >
      <div
        className='h-full bg-[var(--orange-primary)] transition-all duration-75'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
