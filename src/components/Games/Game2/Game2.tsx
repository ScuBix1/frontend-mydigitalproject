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

const INSTRUCTION_TEXT = 'Compte les vaches et clique sur le bon nombre !';
const COW_IMAGE = '/assets/images/cow.png';
const MIN_COWS = 2;
const MAX_COWS = 6;
const ROUNDS = 5;

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRound() {
  const correct = getRandomInt(MIN_COWS, MAX_COWS);
  const options = new Set<number>([correct]);
  while (options.size < 4) {
    options.add(getRandomInt(MIN_COWS, MAX_COWS + 2));
  }
  return {
    cows: correct,
    options: Array.from(options).sort(() => Math.random() - 0.5),
    correct,
  };
}

const Game2 = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { data: subscription } = useActiveSubscription(user?.id);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [isInstructionReading, setIsInstructionReading] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [roundData, setRoundData] = useState(generateRound());
  const timerSound = useSound('/sounds/timer.mp3', { loop: true });
  const correctSound = useSound('/sounds/correct.mp3');
  const wrongSound = useSound('/sounds/wrong.mp3');
  const victorySound = useSound('/sounds/victory.mp3');
  const hasReadInstructionRef = useRef(false);
  const { studentId } = useStudentContext();
  const [sessionId, setSessionId] = useState<number | null>(null);
  const sessionCreationStartedRef = useRef(false);
  const { data: student } = useStudent(studentId);

  const { mutate: createSession } = useCreateSession();
  const { mutate: updateSession } = useUpdateSession();
  const { data: isSessionExisting, isLoading: isLoadingSessionExisting } =
    useSessionExisting();

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
      { game_id: 2, student_id: +studentId, score: 0 },
      {
        onSuccess: (data) => setSessionId(data.session.id),
      }
    );
  }, [studentId, isLoadingSessionExisting, isSessionExisting, createSession]);

  useEffect(() => {
    if (gameOver && studentId && sessionCreationStartedRef.current) {
      updateSession({ score, studentId: parseInt(studentId), gameId: 2 });
    }
  }, [gameOver, sessionId, studentId, isSessionExisting, score, updateSession]);

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
    if (frenchVoice) utterance.voice = frenchVoice;
    utterance.lang = 'fr-FR';
    utterance.onend = () => {
      setIsInstructionReading(false);
      onEnd();
    };
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    const handleVoices = () => {
      readInstruction(INSTRUCTION_TEXT, () => {
        setTimeLeft(60);
        setRound(1);
        setScore(0);
        setRoundData(generateRound());
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
  }, [readInstruction]);

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
    if (timeLeft <= 0 || round > ROUNDS) {
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

  const handleClick = (option: number) => {
    if (gameOver || isInstructionReading) return;
    if (option === roundData.correct) {
      setScore((prev) => prev + 20);
      correctSound.play();
    } else {
      wrongSound.play();
    }
    if (round < ROUNDS) {
      setRound((prev) => prev + 1);
      setRoundData(generateRound());
    } else {
      setGameOver(true);
    }
  };

  const handleRedirect = (
    score: number,
    subscription?: { subscription_active: boolean }
  ) => {
    if (score === 100) {
      navigate('/student/victory/2');
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
          headerBackgroundColor='var(--pink-tertiary)'
          className='justify-center items-center'
          headerContent={<h1 className='text-h1 py-5'>Niveau 2</h1>}
          path={student?.avatar}
        >
          <div className='flex flex-col justify-center items-center p-4 max-w-xl mx-auto text-center'>
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
              <span>
                Niveau: {round} / {ROUNDS}
              </span>
            </div>
            <h2 className='text-h2 font-bold mb-4'>COMPTE LES VACHES :)</h2>
            <div className='flex flex-wrap justify-center items-center gap-8 my-8 min-h-[200px]'>
              {Array.from({ length: roundData.cows }).map((_, idx) => (
                <img
                  key={idx}
                  src={COW_IMAGE}
                  alt='vache'
                  className='w-[100px] h-[100px] object-contain'
                />
              ))}
            </div>
            <div className='flex gap-8 mt-8'>
              {roundData.options.map((option, idx) => (
                <button
                  key={option}
                  onClick={() => handleClick(option)}
                  className='w-24 h-24 rounded-lg text-[60px] text-[var(--foreground-secondary)] font-bold text-walter shadow-md focus:outline-none active:scale-95 transition-transform'
                  style={{
                    backgroundColor: [
                      'var(--pink-primary)',
                      'var(--blue-primary)',
                      'var(--orange-primary)',
                      'var(--green-primary)',
                    ][idx],
                  }}
                  disabled={isInstructionReading}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </ConnectedTemplate>
      ) : (
        <div className='w-full min-h-[100dvh] bg-[var(--pink-tertiary)] flex flex-col items-center justify-center gap-y-8'>
          <h1 className='text-[50px] md:text-[100px] text-walter text-center'>
            Bravo !
          </h1>
          <div className='flex items-end gap-x-4'>
            <img
              src='/assets/images/cow.png'
              alt='Vache'
              className='w-[70px] h-[70px] md:w-[120px] md:h-[120px] lg:w-[200px] lg:h-[200px]'
            />
            <img
              src='/assets/images/cow.png'
              alt='Vache'
              className='w-[170px] h-[170px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px]'
            />
          </div>
          <Button
            className='px-[100px]'
            onClick={() => handleRedirect(score, subscription)}
          >
            Continuer
          </Button>
        </div>
      )}
    </>
  );
};

export default Game2;
