import {
  SignupStudentDto,
  signupStudentSchema,
} from '@/api/student/signup/shema';
import useSignupStudent from '@/api/student/signup/useSignupStudent';
import useStudents from '@/api/tutor/students/getStudents/useStudents';
import Button from '@/components/Button/Button';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import Input from '@/components/Input/Input';
import Panel from '@/components/Panel/Panel';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import StudentProgressionCard from '@/components/StudentProgressionCard/StudentProgressionCard';
import { getColorAvatar } from '@/lib/getColorAvatar';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import ConnectedTemplate from '../../template/ConnectedTemplate';

const Dashboard = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<SignupStudentDto>({
    resolver: zodResolver(signupStudentSchema),
  });

  const {
    mutate: studentMutate,
    isPending,
    error: studentError,
  } = useSignupStudent();

  const { data: students, isLoading } = useStudents();

  const onSubmit = (data: SignupStudentDto) => {
    studentMutate({ ...data });
  };

  if (isLoading) {
    return <div className='text-black'>Chargement ...</div>;
  }

  return (
    <ConnectedTemplate>
      {students === undefined || (students && students.length === 0) ? (
        <div className='flex flex-col items-center justify-around lg:flex-row'>
          <div className='flex flex-col items-center gap-6'>
            <h1 className='text-h1 text-center'>
              Bienvenue sur Math & Magique !
            </h1>
            <p className='text-base'>Pour commencer, ajouter votre enfant</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-5 items-center lg:flex-row lg:flex-wrap lg:w-[500px]'
            >
              <Input
                textLabel='Nom'
                id='lastname'
                placeholder=''
                type='text'
                {...register('lastname')}
                error={errors.lastname?.message}
              />
              <Input
                textLabel='Prénom'
                id='firstname'
                placeholder=''
                type='text'
                {...register('firstname')}
                error={errors.firstname?.message}
              />
              <Input
                textLabel="Nom d'utilisateur"
                id='username'
                placeholder=''
                type='text'
                {...register('username')}
                error={errors.username?.message}
              />
              <Controller
                name='grade'
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    selectLabel='Niveau'
                    id='grade'
                    placeholder='Sélectionner le niveau'
                    options={[
                      { label: 'Petite section', value: 'PS' },
                      { label: 'Moyenne section', value: 'MS' },
                      { label: 'Grande section', value: 'GS' },
                    ]}
                    value={field.value}
                    onValueChange={field.onChange}
                    error={errors.grade?.message}
                  />
                )}
              />
              <Input
                textLabel='Mot de passe'
                id='password'
                placeholder=''
                type='password'
                {...register('password')}
                error={errors.password?.message}
              />
              {studentError ? (
                <span className='h-2 text-red-500 basis-full'>
                  {studentError.message}
                </span>
              ) : (
                <div className='basis-full'></div>
              )}
              <Button disabled={isPending}>Ajouter un enfant</Button>
            </form>
          </div>
          <img
            src='/assets/images/signup-illustration.png'
            className='w-[243px] lg:w-[350px] xl:w-[450px] 2xl:w-[600px] mt-10 '
          />
        </div>
      ) : (
        <div className='flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-around'>
          <Panel
            title={
              <>
                <h2>Top Performance</h2>
                <h2>Performance élèves en(%)</h2>
              </>
            }
            className='h-[100%]'
          >
            {students.map(
              (student, index) =>
                index < 3 && (
                  <div
                    className='flex gap-9 items-center'
                    key={`student-progression-${index}`}
                  >
                    <div className='basis-1/3 flex flex-wrap items-center justify-center sm:justify-start gap-2'>
                      <div
                        className='w-[25px] h-[25px]'
                        style={{
                          backgroundColor: getColorAvatar(student.avatar),
                        }}
                      ></div>
                      <div>{student.firstname}</div>
                    </div>
                    <div className='basis-2/3'>
                      <ProgressBar variant='student' progress={80} />
                    </div>
                  </div>
                )
            )}
          </Panel>
          <Panel
            title={
              <>
                <h2>Résultats</h2>
              </>
            }
          >
            <div className='flex flex-col items-center justify-center gap-8 md:gap-3 md:flex-row md:flex-wrap'>
              {students.map(
                (student, index) =>
                  index < 3 && (
                    <StudentProgressionCard
                      key={`student-progression-card-${index}`}
                      avatar={student.avatar}
                      firstname={student.firstname}
                      progress={80}
                    />
                  )
              )}
            </div>
          </Panel>
        </div>
      )}
    </ConnectedTemplate>
  );
};

export default Dashboard;
