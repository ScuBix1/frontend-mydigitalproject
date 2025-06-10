import Button from '@/components/Button/Button';
import { useStudentContext } from '@/context/student/StudentContext';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import { useEffect, useState } from 'react';
import ArrowRight from '../../../assets/icons/ArrowRight';

interface Color {
  color: string;
  isDifferent?: boolean;
}

const allColors = [
  '#3498db',
  '#f1c40f',
  '#9b59b6',
  '#e67e22',
  '#e74c3c',
  '#2ecc71',
];

const getRandomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
};

const generateRound = (): { top: Color[]; bottom: Color[] } => {
  const baseColors = Array.from({ length: 4 }, () => ({
    color: getRandomColor(),
    isDifferent: false,
  }));

  const differentIndex = Math.floor(Math.random() * 4);
  let newColor = getRandomColor();

  while (newColor === baseColors[differentIndex].color) {
    newColor = getRandomColor();
  }

  const bottomColors = baseColors.map((color) => ({ ...color }));
  bottomColors[differentIndex] = { color: newColor, isDifferent: true };

  return {
    top: baseColors,
    bottom: bottomColors,
  };
};

const Game1 = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [round, setRound] = useState(1);
  const [colors, setColors] = useState(generateRound);
  const [gameOver, setGameOver] = useState(false);
  const { pathAvatar } = useStudentContext();

  useEffect(() => {
    if (timeLeft <= 0 || round > 5) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, round]);

  const handleClick = (color: Color) => {
    if (gameOver) return;

    if (color.isDifferent) {
      setScore((prev) => prev + 20);
    }

    if (round < 5) {
      setRound((prev) => prev + 1);
      setColors(generateRound());
    } else {
      setGameOver(true);
    }
  };

  return (
    <>
      {!gameOver ? (
        <ConnectedTemplate
          isStudent
          headerBackgroundColor='var(--orange-secondary)'
          className='justify-center items-center'
          headerContent={<h1 className='text-h1 py-5'>Niveau 1</h1>}
          path={`/assets/images/${pathAvatar}`}
        >
          <div className='flex flex-col justify-center items-center p-4 max-w-xl mx-auto text-center'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-around py-2 rounded mb-6 text-lg font-semibold gap-5'>
                <span className='flex items-center gap-4'>
                  <img
                    src='/assets/images/timer.png'
                    alt='sablier de temps'
                    className='w-[30px] h-[30px] spin-with-pause'
                  />
                  {`Temps ${timeLeft}s`}
                </span>
                <span>Score: {score}</span>
                <span>Niveau: {round} / 5</span>
              </div>
              <h2 className='text-h2 font-bold mb-4'>
                Trouve la Couleur Manquante :)
              </h2>
            </div>

            <div className='flex gap-4 items-center justify-center'>
              <div className='flex gap-4 items-center justify-center'>
                {colors.top.map((color, index) => (
                  <div
                    key={`top-${index}`}
                    className='w-16 h-16 rounded-full shadow-md mx-auto border border-[5px] border-black'
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
              <span className='text-walter text-[200px]'>?</span>
            </div>

            <div className='h-2 bg-black rounded-xl my-4 w-[110%]' />

            <div className='flex gap-4 mt-6 pr-[91px]'>
              {colors.bottom.map((color, index) => (
                <button
                  key={`bottom-${index}`}
                  onClick={() => handleClick(color)}
                  className='w-16 h-16 rounded-full shadow-md mx-auto focus:outline-none active:scale-95 transition-transform border border-[5px] border-black'
                  style={{ backgroundColor: color.color }}
                />
              ))}
            </div>
          </div>
        </ConnectedTemplate>
      ) : (
        <div className='w-full min-h-[100dvh] bg-[var(--orange-secondary)] flex flex-col items-center justify-center'>
          <h1 className='text-[50px] md:text-[100px] text-walter text-center'>
            Bravo !
          </h1>
          <img
            src='/assets/images/success-game1.png'
            alt='boules souriantes victorieuses'
            className='w-[280px] md:w-[415px] lg:w-[615px]'
          />
          <Button className='px-[100px]' asChild>
            <a
              href={score === 100 ? '/student/victory/1' : '/student/dashboard'}
            >
              <ArrowRight className='w-[40px]' />
            </a>
          </Button>
        </div>
      )}
    </>
  );
};

export default Game1;
