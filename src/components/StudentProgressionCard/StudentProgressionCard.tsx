import { cn } from '@/lib/utils';
import ProgressBar from '../ProgressBar/ProgressBar';

interface StudentProgressionCardProps {
  className?: string;
  color?: string;
  firstname?: string;
  progress?: number;
  id?: number;
}

const StudentProgressionCard = (props: StudentProgressionCardProps) => {
  const { className, color, firstname, progress, id } = props;

  return (
    <div
      className={cn(
        `w-[150px] h-full flex flex-col items-center gap-y-3 rounded-t-xl overflow-hidden`,
        className
      )}
    >
      <div className='h-[110px] w-full' style={{ backgroundColor: color }}>
        avatar
      </div>
      <div>{firstname}</div>
      <div>{`${progress} %`}</div>
      <ProgressBar progress={progress} variant='student' />
      <div>{id}</div>
    </div>
  );
};

export default StudentProgressionCard;
