import { useState } from 'react';
import { z } from 'zod';
import { postTutor } from '../../api/tutor/postTutor';
import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';

const signupSchema = z.object({
  email: z.string().min(1, { message: "L'email est requis." }),
  password: z.string().min(1, { message: 'Le mot de passe est requis.' }),
  firstname: z.string().min(1, { message: 'Le prénom est requis.' }),
  lastname: z.string().min(1, { message: 'Le nom est requis.' }),
  dob: z.string().min(1, { message: 'La date de naissance est requise.' }),
});

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [dob, setDob] = useState('');

  const [error, setError] = useState<null | string>(null);

  const handleSignup = async () => {
    const result = signupSchema.safeParse({
      email,
      password,
      lastname,
      firstname,
      dob,
    });

    if (!result.success) {
      const messages = result.error.errors.map((err) => err.message);
      setError(messages[0]);
      return;
    }

    try {
      await postTutor({
        email,
        password,
        lastname,
        firstname,
        dob,
        admin_id: 1,
      });
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }

      setError('Une erreur inconnue est survenue.');
    }
  };

  return (
    <div className='relative flex flex-col items-center justify-around gap-x-20 min-h-[100dvh] lg:flex-row'>
      <div className='flex flex-col items-center'>
        <h1 className='text-center text-h1 mb-3'>Inscription</h1>
        <form action='' className='flex flex-col gap-y-4'>
          <InputText
            id='lastname'
            textLabel='Nom'
            placeholder='nom ...'
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <InputText
            id='firstname'
            textLabel='Prénom'
            placeholder='prénom ...'
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <InputText
            id='email'
            textLabel='Email'
            placeholder='email ...'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputText
            id='password'
            textLabel='Mot de passe'
            placeholder='mot de passe ...'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputText
            id='dob'
            textLabel='Date de naissance'
            placeholder='dd/mm/AAAA'
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </form>
        <div className='h-2'>{error}</div>
        <Button
          variant='primary'
          className='mt-4 lg:mt-10'
          onClick={handleSignup}
        >
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
