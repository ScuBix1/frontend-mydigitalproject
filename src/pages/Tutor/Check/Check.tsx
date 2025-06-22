import Button from '@/components/Button/Button';
import { getRandomNumber } from '@/lib/getRandomNumber';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';

const Check = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [generatedNumber] = useState(() => getRandomNumber());
  const [number, setNumber] = useState<string>('');
  const redirectTo = location.state?.redirectTo || '/tutor/dashboard';
  const isSessionExpired = localStorage.getItem('sessionExpired') === 'true';
  const sessionExpiredMessage = localStorage.getItem('sessionExpiredMessage');

  useEffect(() => {
    if (isSessionExpired) {
      localStorage.removeItem('sessionExpired');
      localStorage.removeItem('sessionExpiredMessage');
      localStorage.removeItem('studentId');
      localStorage.removeItem('sessionStartTime');
    }
  }, [isSessionExpired]);

  const handleCheck = () => {
    if (!number) return false;

    if (generatedNumber.value === parseInt(number)) {
      navigate(redirectTo);
    }
  };

  return (
    <div className='min-h-[100dvh] flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-col items-center mx-5 gap-5 md:flex-row md:w-full md:items-end'>
        <div className='flex flex-col items-center justify-center gap-y-8 text-center basis-1/2'>
          <h1 className='text-h1 uppercase'>
            {isSessionExpired
              ? 'Session expirée'
              : 'Attendez le professeur pour continuer !'}
          </h1>
          {isSessionExpired && sessionExpiredMessage && (
            <p className='text-walter'>{sessionExpiredMessage}</p>
          )}
          <p className='uppercase text-walter'>
            Saisissez le nombre ci-dessous
          </p>
          <div className='flex flex-col justify-center items-center gap-5'>
            <Input
              className='items-center justify-center'
              id='number'
              textLabel={generatedNumber.text}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Button onClick={handleCheck}>Valider</Button>
          </div>
        </div>
        <div className='flex items-center justify-center basis-1/2'>
          <img
            className='w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]'
            src='/assets/images/signup-illustration.png'
            alt='Professeur illustration'
          />
        </div>
      </div>
    </div>
  );
};

export default Check;
