import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';

const Signup = () => {
  return (
    <div className='relative flex flex-col items-center justify-around gap-x-20 min-h-[100dvh] lg:flex-row'>
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-h1 mb-3'>Inscription</h1>
        <form action='' className='flex flex-col gap-y-4'>
          <InputText id='lastname' textLabel='Nom' placeholder='nom ...' />
          <InputText
            id='firstname'
            textLabel='Prénom'
            placeholder='prénom ...'
          />
          <InputText id='email' textLabel='Email' placeholder='email ...' />
          <InputText
            id='password'
            textLabel='Mot de passe'
            placeholder='mot de passe ...'
          />
          <InputText
            id='dob'
            textLabel='Date de naissance'
            placeholder='dd/mm/AAAA'
          />
        </form>
        <Button variant='primary' className='mt-4 lg:mt-10'>
          commencer
        </Button>
      </div>
      <img
        src='/assets/images/signup-illustration.png'
        className='w-[243px] lg:w-[500px] mt-10 '
      />
      <div className='hidden absolute bottom-5 lg:block text-center text-[var(--foreground-secondary)]'>
        <h2 className='font-bold text-tag'>
          Essayez gratuitement pendant 7 jours !
        </h2>
        <p className='flex flex-col'>
          <span>
            Découvrez tout le potentiel de notre plateforme sans engagement.
          </span>
          <span>
            Profitez d’un accès complet aux ressources et jeux éducatifs.
          </span>
          <span>
            👉 Après la période d’essai, continuez l’aventure pour 9,99 €/mois
            (annulable à tout moment).
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
