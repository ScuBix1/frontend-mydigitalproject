import { useCreateSession } from '@/api/session/createSession/useCreateSession';
import { useSessionExisting } from '@/api/session/getSessionExisting/useSessionExisting';
import { useUpdateSession } from '@/api/session/updateSession/useUpdateSession';
import useStudent from '@/api/student/getStudent/useStudent';
import useActiveSubscription from '@/api/tutor/getSubscriptionStatus/useActiveSubscription';
import Button from '@/components/Button/Button';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { useStudentContext } from '@/context/student/useStudentContext';
import { useSound } from '@/hooks/useSound';
import { isIOS } from '@/lib/isIOS';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const INSTRUCTION_TEXT = 'Trouve la couleur manquante !';

const Game1 = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { data: subscription } = useActiveSubscription(user?.id);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [round, setRound] = useState(1);
  const [colors, setColors] = useState(generateRound);
  const [gameOver, setGameOver] = useState(false);
  const { studentId } = useStudentContext();
  const { data: student } = useStudent(studentId);
  const [sessionId, setSessionId] = useState<number | null>(null);
  const sessionCreationStartedRef = useRef(false);
  const [isInstructionReading, setIsInstructionReading] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const timerSound = useSound('/sounds/timer.mp3', { loop: true });
  const correctSound = useSound('/sounds/correct.mp3');
  const wrongSound = useSound('/sounds/wrong.mp3');
  const victorySound = useSound('/sounds/victory.mp3');

  const { mutate: createSession } = useCreateSession();
  const { mutate: updateSession } = useUpdateSession();
  const { data: isSessionExisting, isLoading: isLoadingSessionExisting } =
    useSessionExisting();

  const hasReadInstructionRef = useRef(false);
  const readInstruction = useCallback((text: string, onEnd: () => void) => {
    if (hasReadInstructionRef.current) return;
    hasReadInstructionRef.current = true;
    setIsInstructionReading(true);

    if (isIOS()) {
      setIsInstructionReading(false);
      onEnd();
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice =
      voices.find((v) => v.lang.startsWith('fr') && v.localService) ||
      voices.find((v) => v.lang.startsWith('fr'));
    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }
    utterance.lang = 'fr-FR';
    utterance.onend = () => {
      setIsInstructionReading(false);
      onEnd();
    };
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    if (
      isLoadingSessionExisting ||
      isSessionExisting ||
      sessionCreationStartedRef.current ||
      !studentId
    )
      return;

    sessionCreationStartedRef.current = true;

    createSession(
      { game_id: 1, student_id: +studentId, score: 0 },
      {
        onSuccess: (data) => setSessionId(data.session.id),
      }
    );
  }, [studentId, isLoadingSessionExisting, isSessionExisting, createSession]);

  useEffect(() => {
    if (gameOver && studentId && sessionCreationStartedRef.current) {
      updateSession({ score, studentId: parseInt(studentId), gameId: 1 });
    }
  }, [gameOver, sessionId, studentId, isSessionExisting, score, updateSession]);

  useEffect(() => {
    const handleVoices = () => {
      readInstruction(INSTRUCTION_TEXT, () => {
        setTimeLeft(60);
        setRound(1);
        setScore(0);
        setColors(generateRound());
        setGameOver(false);
        setIsGameStarted(true);
      });
    };
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', handleVoices);
    } else {
      handleVoices();
    }
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoices);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isGameStarted && !isInstructionReading && !gameOver) {
      timerSound.play();
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      timerSound.stop();
    }
    if (timeLeft <= 0 || round > 5) {
      setGameOver(true);
      timerSound.stop();
    }
    return () => {
      if (timer) clearInterval(timer);
      timerSound.stop();
    };
  }, [
    isGameStarted,
    isInstructionReading,
    timeLeft,
    round,
    gameOver,
    timerSound,
  ]);

  useEffect(() => {
    if (gameOver && !isInstructionReading) {
      victorySound.play();
    }
  }, [gameOver, isInstructionReading, victorySound]);

  const handleClick = (color: Color) => {
    if (gameOver || isInstructionReading) return;
    if (color.isDifferent) {
      setScore((prev) => prev + 20);
      correctSound.play();
    } else {
      wrongSound.play();
    }
    if (round < 5) {
      setRound((prev) => prev + 1);
      setColors(generateRound());
    } else {
      setGameOver(true);
    }
  };

  const handleRedirect = (
    score: number,
    subscription?: { subscription_active: boolean }
  ) => {
    if (score === 100) {
      navigate('/student/victory/1');
    } else if (subscription && !subscription?.subscription_active) {
      navigate('/tutor/check', {
        state: { redirectTo: `/student/subscription` },
      });
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <>
      {!gameOver ? (
        <ConnectedTemplate
          isStudent
          headerBackgroundColor='var(--orange-primary)'
          className='justify-center items-center'
          headerContent={
            <h1 className='text-h1 py-5 text-[var(--foreground-secondary)]'>
              Niveau 1
            </h1>
          }
          path={`${student?.avatar}`}
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

            <div className='flex gap-4 items-center justify-center h-[100px]'>
              <div className='flex gap-4 items-center justify-center'>
                {colors.top.map((color, index) => (
                  <div
                    key={`top-${index}`}
                    className='w-16 h-16 rounded-full shadow-md mx-auto border border-[5px] border-black'
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
              <span className='text-walter text-[100px] w-[90px]'>?</span>
            </div>

            <div className='h-2 bg-black rounded-xl my-2 w-[110%]' />

            <div className='flex gap-x-4 mt-2 pr-[90px] h-[100px]'>
              {colors.bottom.map((color, index) => (
                <button
                  key={`bottom-${index}`}
                  onClick={() => handleClick(color)}
                  className='w-16 h-16 rounded-full shadow-md mx-auto focus:outline-none active:scale-95 transition-transform border border-[5px] border-black'
                  style={{ backgroundColor: color.color }}
                  disabled={isInstructionReading}
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
          <Button
            className='px-[100px]'
            onClick={() => handleRedirect(score, subscription)}
          >
            <ArrowRight className='w-[40px]' />
          </Button>
        </div>
      )}
    </>
  );
};

export default Game1;
