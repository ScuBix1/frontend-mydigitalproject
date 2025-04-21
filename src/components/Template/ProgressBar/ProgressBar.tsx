import clsx from 'clsx';

interface ProgressBarProps {
  className?: string;
  progress?: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { className, progress = 0 } = props;

  return (
    <div
      className={clsx(
        'h-[10px] min-w-[180px] w-[180px] bg-[var(--blue-primary)] rounded-full overflow-hidden sm:min-w-[280px] sm:w-[280px] sm:w-1/3',
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
