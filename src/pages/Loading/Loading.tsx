import { useEffect, useState } from 'react';
import ProgressBar from '../../components/Template/ProgressBar/ProgressBar';
import Wave from '../../components/Template/Wave/Wave';

const Loading = () => {
  const [imagesCompleted, setImagesCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sources = [
      '/assets/images/logo.png',
      '/assets/images/illustration.png',
    ];

    let completed = 0;

    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        completed++;
        if (completed === sources.length) {
          setImagesCompleted(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!imagesCompleted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [imagesCompleted]);

  return (
    <div className='h-[100dvh] flex flex-col items-center sm:relative bg-white'>
      <div className='flex justify-center items-center h-1/2 relative'>
        <img
          src='/assets/images/logo.png'
          alt='Logo de Math et Magique'
          className='min-h-[280px] min-w-[280px]  sm:h-[450px] sm:w-[450px] 2xl:h-[610px] 2xl:w-[610px]'
        />
        {imagesCompleted && (
          <ProgressBar
            className='absolute bottom-[120px]'
            progress={progress}
          />
        )}
      </div>

      <img
        src='/assets/images/illustration.png'
        alt='illustration'
        className='min-w-[185px] h-[185px] w-[185px] sm:absolute sm:bottom-[30px] sm:right-[30px] sm:z-[99999] md:w-[220px] md:h-[220px] md:right-[60px] lg:w-[300px] lg:h-[300px] xl:w-[360px] xl:h-[360px] 2xl:w-[420px] 2xl:h-[420px] 2xl:right-[140px] 2xl:bottom-[80px]'
      />

      <div className='h-1/2 w-full relative'>
        <Wave className='w-full absolute bottom-0' />
      </div>
    </div>
  );
};

export default Loading;
