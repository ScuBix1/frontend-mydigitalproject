import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';
import Link from '../../components/Link/Link';

const Signin = () => {
  return (
    <div className='min-h-[100dvh] w-full'>
      <div className='min-h-[100dvh] flex flex-col justify-center items-center lg:flex-row lg:justify-around'>
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          <h1 className='text-h1'>Se connecter</h1>
          <form action='' className='flex flex-col gap-y-4'>
            <InputText id='email' textLabel='E-mail' placeholder='E-mail...' />
            <InputText
              id='password'
              textLabel='Mot de passe'
              placeholder='Mot de passe...'
            />
          </form>
          <Button variant='primary'>Se connecter</Button>
          <div className='text-center'>
            <p>Vous n’êtes pas encore inscrit ?</p>
            <Link href='/signup' variant='primary'>
              Créer votre compte gratuit
            </Link>
          </div>
        </div>
        <img
          alt='illustration'
          src='/assets/images/illustration-signin.png'
          className='w-[245px] lg:w-[650px] mt-5'
        />
      </div>
    </div>
  );
};

export default Signin;
