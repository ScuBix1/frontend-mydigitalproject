import ArrowRight from '@/assets/icons/ArrowRight';
import Button from '@/components/Button/Button';

const Victory1 = () => {
  return (
    <div className='w-full min-h-[100dvh] bg-[var(--orange-secondary)] flex flex-col items-center justify-center  gap-5 px-3'>
      <h1 className='text-[50px] md:text-[100px] text-walter text-center'>
        Tu as gagné une médaille !
      </h1>
      <img
        src='/assets/images/color-medal.png'
        alt='boules souriantes victorieuses'
        className='w-[256px]'
      />
      <Button className='px-[100px]' asChild>
        <a href='/student/dashboard'>
          <ArrowRight className='w-[40px]' />
        </a>
      </Button>
    </div>
  );
};

export default Victory1;
