import Input from '@/components/Input/Input';

const Dashboard = () => {
  return (
    <div className='flex min-h-[100dvh] items-center justify-around'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-h1'>Bienvenue sur Math & Magique !</h1>
        <p className='text-base'>Pour commencer, ajouter votre enfant</p>
        <form>
          <Input textLabel='Nom' id='lastname' placeholder='' type='text' />
          <Input textLabel='Prénom' id='firstname' placeholder='' type='text' />
          <Input
            textLabel="Nom d'utilisateur"
            id='username'
            placeholder=''
            type='text'
          />
          <Input
            textLabel='Mot de passe'
            id='password'
            placeholder=''
            type='password'
          />
        </form>
      </div>
      <img
        src='/assets/images/signup-illustration.png'
        className='w-[243px] lg:w-[350px] xl:w-[450px] 2xl:w-[600px] mt-10 '
      />
    </div>
  );
};

export default Dashboard;
