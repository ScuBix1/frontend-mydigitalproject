import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SignupTutorDto, signupSchema } from '../../api/tutor/signup/schema';
import { useSignupTutor } from '../../api/tutor/signup/useSignupTutor';
import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupTutorDto>({
    resolver: zodResolver(signupSchema),
  });
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useSignupTutor();

  const onSubmit = async (data: SignupTutorDto) => {
    mutate(data);
    if (!isPending && !isError) {
      navigate('/');
    }
  };

  return (
    <div className='relative flex flex-col items-center justify-around gap-x-20 min-h-[100dvh]'>
      <div className=' flex flex-col items-center justify-around gap-x-20 min-h-[80dvh] lg:flex-row'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-h1 mb-3'>Inscription</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:max-w-[512px]'
          >
            <InputText
              id='lastname'
              textLabel='Nom'
              placeholder='nom ...'
              {...register('lastname')}
              error={errors.lastname?.message}
            />
            <InputText
              id='firstname'
              textLabel='Prénom'
              placeholder='prénom ...'
              {...register('firstname')}
              error={errors.firstname?.message}
            />
            <InputText
              id='email'
              textLabel='Email'
              placeholder='email ...'
              {...register('email')}
              error={errors.email?.message}
            />
            <InputText
              id='password'
              textLabel='Mot de passe'
              placeholder='mot de passe ...'
              {...register('password')}
              error={errors.password?.message}
            />
            <InputText
              id='dob'
              textLabel='Date de naissance'
              placeholder='dd/mm/AAAA'
              {...register('dob')}
              error={errors.dob?.message}
            />

            <div className='h-2 text-red-500 basis-full'>
              {isError && error.message}
            </div>
            <div className='basis-full'>
              <Button
                variant='primary'
                className='mt-4 lg:mt-10 no-underline'
                type='submit'
                disabled={isPending}
              >
                commencer
              </Button>
            </div>
          </form>
        </div>
        <img
          src='/assets/images/signup-illustration.png'
          className='w-[243px] lg:w-[300px] mt-10 '
        />
      </div>
    </div>
  );
};

export default Signup;
