import {
  SigninStudentDto,
  signinStudentSchema,
} from '@/api/student/signin/schema';
import { useSigninStudent } from '@/api/student/signin/useSigninStudent';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import Link from '@/components/Link/Link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SigninStudentDto>({
    resolver: zodResolver(signinStudentSchema),
  });
  const { mutate, error } = useSigninStudent();

  const onSubmit = (data: SigninStudentDto) => {
    mutate(data);
  };

  return (
    <div className='min-h-[100dvh] w-full'>
      <div className='min-h-[100dvh] flex flex-col justify-center items-center lg:flex-row lg:justify-around'>
        <div className='flex flex-col gap-y-4 justify-center items-center'>
          <h1 className='text-h1'>Se connecter</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-y-4 mx-auto items-center'
          >
            <Input
              id='email'
              textLabel='E-mail'
              placeholder='E-mail...'
              {...register('username')}
              error={errors.username?.message}
            />
            <Input
              id='password'
              type='password'
              textLabel='Mot de passe'
              placeholder='Mot de passe...'
              {...register('password')}
              error={errors.password?.message}
            />
            {error && (
              <span className='h-2 text-red-500 basis-full'>
                {error.message}
              </span>
            )}
            <Button variant='primary' type='submit'>
              Se connecter
            </Button>
          </form>
          <div className='text-center'>
            <Link href='/tutor/dashboard' variant='primary'>
              Mot de passe oublié ?
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
