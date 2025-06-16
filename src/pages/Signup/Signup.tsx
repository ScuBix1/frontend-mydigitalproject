import DateInput from '@/components/DateInput/DateInput';
import formatDateToISO from '@/lib/formatDateToISO';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SignupTutorDto, signupSchema } from '../../api/tutor/signup/schema';
import { useSignupTutor } from '../../api/tutor/signup/useSignupTutor';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignupTutorDto>({
    resolver: zodResolver(signupSchema),
  });

  const {
    mutate: tutorMutate,
    isPending,
    error: tutorError,
  } = useSignupTutor();

  const onSubmit = async (data: SignupTutorDto) => {
    const isoDate = formatDateToISO(data.dob);
    tutorMutate({ ...data, dob: isoDate });
  };

  return (
    <div className='relative flex flex-col items-center justify-around gap-x-20 min-h-[100dvh]'>
      <div className=' flex flex-col items-center justify-around gap-x-20 w-full min-h-[80dvh] lg:flex-row'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center text-h1 mb-3'>Inscription</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:max-w-[512px]'
          >
            <Input
              id='lastname'
              textLabel='Nom'
              placeholder='nom ...'
              {...register('lastname')}
              error={errors.lastname?.message}
            />
            <Input
              id='firstname'
              textLabel='Prénom'
              placeholder='prénom ...'
              {...register('firstname')}
              error={errors.firstname?.message}
            />
            <Input
              id='email'
              textLabel='Email'
              placeholder='email ...'
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              id='password'
              type='password'
              textLabel='Mot de passe'
              placeholder='mot de passe ...'
              {...register('password')}
              error={errors.password?.message}
            />
            <Controller
              name='dob'
              control={control}
              render={({ field }) => (
                <DateInput
                  id='dob'
                  label='Date de naissance'
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.dob?.message}
                />
              )}
            />

            {tutorError && (
              <span className='h-2 text-red-500 basis-full'>
                {tutorError.message}
              </span>
            )}
            <div className='basis-full'></div>
            <div className='flex justify-center items-center'>
              <Button
                variant='primary'
                className='no-underline'
                type='submit'
                disabled={isPending}
              >
                commencer
              </Button>
            </div>
            <div className='basis-full'></div>
            <Button variant='link' className='px-3 py-0' asChild>
              <Link to='/signin'>Déjà un compte ?</Link>
            </Button>
          </form>
        </div>
        <img
          src='/assets/images/signup-illustration.png'
          className='w-[243px] lg:w-[350px] xl:w-[450px] 2xl:w-[600px] mt-10 '
        />
      </div>
    </div>
  );
};

export default Signup;
