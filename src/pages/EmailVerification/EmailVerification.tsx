import useSendEmail from '@/api/tutor/email/send/useSendEmail';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  EmailVerificationDto,
  emailVerificationSchema,
} from '../../api/tutor/email/verification/schema';
import { useEmailVerification } from '../../api/tutor/email/verification/useEmailVerification';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

interface EmailVerificationProps {
  className?: string;
}

const EmailVerification = (props: EmailVerificationProps) => {
  const { className } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailVerificationDto>({
    resolver: zodResolver(emailVerificationSchema),
  });
  const { user } = useAuthContext();
  const email = useLocation().state?.email ?? user?.username;
  const { mutate, error } = useEmailVerification();
  const { mutate: emailMutate } = useSendEmail();
  const navigate = useNavigate();

  const handleResendEmail = () => {
    if (!email) {
      navigate('/signin', { replace: true });
      return;
    }
    emailMutate({ email: email });
  };

  const onSubmit = (data: EmailVerificationDto) => {
    mutate(data);
  };

  return (
    <div
      className={clsx(
        'min-h-[100dvh] flex flex-col items-center justify-center',
        className
      )}
    >
      <div className='flex flex-col gap-5 items-center w-full  md:flex-row md:items-end md:justify-around'>
        <div className='flex flex-col justify-center gap-5 text-center'>
          <h1 className='text-h1'>Vérification de votre email</h1>
          <p className=''>
            Vous avez 15 minutes pour saisir le code à 6 chiffres reçu par email
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-center justify-center gap-5'
          >
            <Input
              id='otp'
              {...register('otp')}
              placeholder='111222'
              error={errors.otp?.message}
            />
            {error && (
              <span className='h-2 text-red-500 basis-full'>
                {error.message}
              </span>
            )}
            <Button onClick={handleResendEmail} type='button' variant='link'>
              Je n'ai pas reçu le code - renvoyer l'email
            </Button>
            <Button variant='primary' type='submit'>
              Vérifier l'email
            </Button>
          </form>
        </div>
        <div className='flex justify-center'>
          <img
            className='w-[300px] h-[300px] md:w-[260px] md:h-[260px] lg:w-[400px] lg:h-[400px]'
            src='/assets/images/email-illustration.png'
            alt='Email illustration'
          />
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
