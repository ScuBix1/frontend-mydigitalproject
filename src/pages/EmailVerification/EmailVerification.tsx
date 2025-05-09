import clsx from 'clsx';
import InputText from '../../components/InputText/InputText';

interface EmailVerificationProps {
  className?: string;
}

const EmailVerification = (props: EmailVerificationProps) => {
  const { className } = props;
  return (
    <div
      className={clsx(
        'min-h-[100dvh] flex flex-col items-center justify-center gap-5',
        className
      )}
    >
      <h1 className='text-h1'>Vérification de votre email</h1>
      <p>
        Vous avez 15 minutes pour saisir le code à 6 chiffres reçu par email
      </p>
      <InputText id='codeVerification' placeholder='111222' />
    </div>
  );
};

export default EmailVerification;
