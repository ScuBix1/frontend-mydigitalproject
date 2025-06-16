import Button from '@/components/Button/Button';
import { getRandomNumber } from '@/lib/getRandomNumber';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';

const Check = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [generatedNumber] = useState(() => getRandomNumber());
  const [number, setNumber] = useState<string>('');
  const redirectTo = location.state?.redirectTo || '/tutor/dashboard';

  const handleCheck = () => {
    if (!number) return false;

    if (generatedNumber.value === parseInt(number)) {
      navigate(redirectTo);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-[100dvh] gap-y-8 text-center'>
      <h1 className='text-h1 uppercase'>
        Attendez le professeur pour continuer !
      </h1>
      <p className='uppercase text-walter'>Saisissez le nombre ci-dessous</p>
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
  );
};

export default Check;
