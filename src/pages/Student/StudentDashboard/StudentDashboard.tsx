import useStudent from '@/api/student/getStudent/useStudent';
import { useStudentProgressions } from '@/api/student/progression/useStudentProgression';
import Level from '@/components/Level/Level';
import { levels } from '@/constants/levels';
import { medals } from '@/constants/medals';
import { useStudentContext } from '@/context/student/useStudentContext';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import { useEffect, useState } from 'react';
import Medal from '../../../components/Medal/Medal';

const StudentDashboard = () => {
  const { studentId } = useStudentContext();
  const { data: student } = useStudent(studentId);
  const { data: progressions } = useStudentProgressions(studentId);
  const [imageVisible, setImageVisible] = useState(false);

  const unlockedCount = progressions?.length ? progressions.length - 1 : 0;
  const nextIndexToPlay =
    progressions?.filter((p) => p.per_cent === 100).length ?? 0;
  const nextPlayableIndex =
    nextIndexToPlay !== -1 ? nextIndexToPlay : unlockedCount;

  useEffect(() => {
    setTimeout(() => setImageVisible(true), 100);
  }, []);

  return (
    <ConnectedTemplate
      isDashboard
      isStudent
      headerBackgroundColor='var(--blue-primary)'
      path={student?.avatar}
      headerContent={
        <div className='text-center flex flex-col justify-center items-center'>
          <img
            src='/assets/images/abacus.png'
            alt='boulier'
            className='w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]'
          />
          <h1 className='text-h1 text-[var(--foreground-secondary)]'>{`Tableau de bord de ${student?.firstname}`}</h1>
        </div>
      }
    >
      <div className='flex flex-col items-center justify-center px-8'>
        <div className='flex flex-wrap gap-8 items-center justify-center mt-10'>
          {levels.map((level, index) => {
            const isLast = index === nextPlayableIndex;
            const isDisabled = index > nextPlayableIndex;

            return (
              <Level
                key={level.id}
                isLast={isLast}
                isDisabled={isDisabled}
                color={level.color}
                path={level.path}
              >
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <img src={level.image} />
                  <h2 className='text-walter text-[var(--foreground-secondary)]'>
                    {level.label}
                  </h2>
                </div>
              </Level>
            );
          })}
        </div>

        <div className='mt-10 flex flex-wrap justify-center items-center gap-3'>
          <div className='max-w-[400px] flex flex-wrap gap-3 justify-center items-center'>
            {medals.map((medal, index) => {
              const isReceived = progressions?.[index]?.per_cent === 100;
              return (
                <Medal key={medal.id} isReceived={isReceived}>
                  <img src={medal.image} alt={medal.alt} />
                </Medal>
              );
            })}
          </div>
          <div className='relative w-[200px] h-[200px]'>
            <img
              className={`w-[200px] h-[200px] absolute bottom-0 transition-all duration-500 ease-out ${
                imageVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-1/2 opacity-0'
              }`}
              src='/assets/images/illustration.png'
              alt='Illustration du magicien'
            />
          </div>
        </div>
      </div>
    </ConnectedTemplate>
  );
};

export default StudentDashboard;
