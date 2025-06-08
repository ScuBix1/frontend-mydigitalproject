import Level from '@/components/Level/Level';
import Medal from '../../../components/Medal/Medal';

const StudentDashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-wrap gap-8 items-center justify-center mt-10'>
        <Level>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <img src='/assets/images/game1.png' />
            <h2 className='text-walter text-[var(--foreground-secondary)]'>
              Niveau 1
            </h2>
          </div>
        </Level>
        <Level isLast color='var(--pink-primary)'>
          <img src='/assets/images/game2.png' />
          <h2>Niveau 2</h2>
        </Level>
        <Level isDisabled>
          <img src='/assets/images/game3.png' />
          <h2>Niveau 3</h2>
        </Level>
        <Level isDisabled>
          <img src='/assets/images/game4.png' />
          <h2>Niveau 4</h2>
        </Level>
        <Level isDisabled>
          <img src='/assets/images/game5.png' />
          <h2>Récompense</h2>
        </Level>
      </div>
      <div className='mt-10 flex flex-wrap justify-center items-center gap-3'>
        <div className='max-w-[400px] flex flex-wrap gap-3 justify-center items-center'>
          <Medal />
          <Medal />
          <Medal />
          <Medal />
          <Medal />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
