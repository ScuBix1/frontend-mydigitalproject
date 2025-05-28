import { useStudentProgression } from '@/api/tutor/students/getStudentProgression/useStudentProgression';
import computeProgression from '@/lib/computeProgression';
import clsx from 'clsx';

interface ProgressBarProps {
  className?: string;
  progress?: number;
  studentId?: number;
  variant?: 'student' | 'loading';
}

const ProgressBar = (props: ProgressBarProps) => {
  const { className, progress = 0, studentId, variant = 'loading' } = props;

  const { data: progressionData } = useStudentProgression(studentId ?? null);
  const progression = computeProgression(progressionData);

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
        style={{ width: `${studentId ? progression : progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
