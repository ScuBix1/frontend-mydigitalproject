import InputText from '../../components/InputText/InputText';

const Signup = () => {
  return (
    <div className='flex items-center justify-around gap-x-20 h-[100dvh]'>
      <div>
        <h1 className='text-center text-h1 mb-3'>Inscription</h1>
        <form action='' className='flex flex-col gap-y-4'>
          <InputText
            id='lastname'
            textLabel='Nom'
            placeholder='Taper votre nom ...'
          />
          <InputText
            id='firstname'
            textLabel='Prénom'
            placeholder='Taper votre prénom ...'
          />
          <InputText
            id='email'
            textLabel='Email'
            placeholder='Taper votre email ...'
          />
          <InputText
            id='password'
            textLabel='Mot de passe'
            placeholder='Taper votre mot de passe ...'
          />
          <InputText
            id='dob'
            textLabel='Date de naissance'
            placeholder='Taper votre date de naissance ...'
          />
        </form>
      </div>
      <img src='/assets/images/signup-illustration.png' className='w-[300px]' />
    </div>
  );
};

export default Signup;
