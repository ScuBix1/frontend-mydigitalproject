import { getColorAvatar } from '@/lib/getColorAvatar';
import { cn } from '@/lib/utils';
import ProgressBar from '../ProgressBar/ProgressBar';

interface StudentProgressionCardProps {
  className?: string;
  firstname?: string;
  progress?: number;
  id?: number;
  avatar?: string;
}

const StudentProgressionCard = (props: StudentProgressionCardProps) => {
  const { className, firstname, progress, id, avatar } = props;

  return (
    <div
      className={cn(
        `w-[150px] h-full flex flex-col items-center gap-y-3 rounded-t-xl overflow-hidden `,
        className
      )}
    >
      <div
        className='h-[110px] w-full  overflow-hidden'
        style={{ backgroundColor: getColorAvatar(avatar) }}
      >
        <img
          src={`/avatars/${avatar ?? 'wizard.png'}`}
          className='object-contain w-full h-full'
          alt=''
        />
      </div>
      <div>{firstname}</div>
      <div>{`${progress} %`}</div>
      <ProgressBar progress={progress} variant='student' />
      <div>{id}</div>
    </div>
  );
};

export default StudentProgressionCard;
