import { useEffect, useState } from 'react';
import ProgressBar from '../../components/Template/ProgressBar/ProgressBar';

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
    <div className='flex flex-col items-center h-[100dvh]'>
      <div className='flex justify-center items-center h-1/2 relative'>
        <img
          src='/assets/images/logo.png'
          alt='Logo de Math et Magique'
          className='h-[280px] min-w-[280px] w-[280]  sm:h-[450px] sm:w-[450px] 2xl:h-[610px] 2xl:w-[610px]'
        />
        {imagesCompleted && (
          <ProgressBar className='absolute bottom-[90px]' progress={progress} />
        )}
      </div>

      <img
        src='/assets/images/illustration.png'
        alt='illustration'
        className='min-w-[185px] h-[185px] w-[185px] md:absolute md:bottom-[10px] md:right-[60px] lg:w-[190px] lg:h-[190px] xl:w-[250px] xl:h-[250px] 2xl:w-[310px] 2xl:h-[310px] '
      />
    </div>
  );
};

export default Loading;
