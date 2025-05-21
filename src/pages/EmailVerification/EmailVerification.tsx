import useSendEmail from '@/api/tutor/email/send/useSendEmail';
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
  const email = useLocation().state?.email;
  const { mutate, error } = useEmailVerification();
  const { mutate: emailMutate } = useSendEmail();
  const navigate = useNavigate();

  const handleResendEmail = () => {
    if (!email) {
      navigate('/signin', { replace: true });
      return;
    }
    emailMutate({ email });
  };

  const onSubmit = (data: EmailVerificationDto) => {
    mutate(data);
  };

  return (
    <div
      className={clsx(
        'min-h-[100dvh] flex flex-col items-center justify-center gap-5',
        className
      )}
    >
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
          <span className='h-2 text-red-500 basis-full'>{error.message}</span>
        )}
        <Button onClick={handleResendEmail} type='button' variant='link'>
          Je n'ai pas reçu le code - renvoyer l'email
        </Button>
        <Button variant='primary' type='submit'>
          Vérifier l'email
        </Button>
      </form>
    </div>
  );
};

export default EmailVerification;
