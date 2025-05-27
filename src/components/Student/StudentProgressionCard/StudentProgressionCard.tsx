import { useStudentProgression } from '@/api/tutor/students/getStudentProgression/useStudentProgression';
import computeProgression from '@/lib/computeProgression';
import { getColorAvatar } from '@/lib/getColorAvatar';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import ProgressBar from '../../ProgressBar/ProgressBar';

interface StudentProgressionCardProps {
  className?: string;
  firstname?: string;
  studentId: number;
  avatar?: string;
}

const StudentProgressionCard = (props: StudentProgressionCardProps) => {
  const { className, firstname, studentId, avatar } = props;

  const { data: progressionData } = useStudentProgression(studentId);
  const progression = computeProgression(progressionData);
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
      <div className=''>{firstname}</div>
      <div>{`${progression} %`}</div>
      <ProgressBar progress={progression} variant='student' />
      <div className='flex gap-2'>
        <Button
          variant='link'
          className='p-0 text-[var(--foreground-tertiary)] font-[400]'
          asChild
        >
          <Link to=''>Jouer</Link>
        </Button>
        <Button
          variant='link'
          className='p-0 text-[var(--foreground-tertiary)] font-[400]'
          asChild
        >
          <Link to=''>Modifier</Link>
        </Button>
      </div>
    </div>
  );
};

export default StudentProgressionCard;
