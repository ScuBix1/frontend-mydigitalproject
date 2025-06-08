import {
  SignupStudentDto,
  signupStudentSchema,
} from '@/api/student/signup/shema';
import Button from '@/components/Button/Button';
import CustomSelect from '@/components/CustomSelect/CustomSelect';
import Input from '@/components/Input/Input';
import StudentAvatarPicker from '@/components/Student/StudentAvatarPicker/StudentAvatarPicker';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface StudentFormProps {
  mode: 'create' | 'edit';
  defaultValues?: Partial<SignupStudentDto>;
  onSubmit: (data: SignupStudentDto) => void;
  isPending: boolean;
  error?: string;
}

const StudentForm = (props: StudentFormProps) => {
  const { mode, defaultValues, onSubmit, isPending, error } = props;
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<SignupStudentDto>({
    resolver: zodResolver(signupStudentSchema),
    defaultValues,
  });

  const [avatar, setAvatar] = useState(defaultValues?.avatar ?? 'wizard.png');

  console.log(getValues('password'));
  useEffect(() => {
    setValue('avatar', avatar);
  }, [avatar, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-5 items-start'
    >
      <StudentAvatarPicker
        selectedAvatar={avatar}
        onAvatarSelect={setAvatar}
        className='mx-auto'
      />
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
      {mode === 'create' && (
        <Input
          textLabel='Mot de passe'
          id='password'
          placeholder=''
          type='password'
          {...register('password')}
          error={errors.password?.message}
        />
      )}
      {error && <span className='h-2 text-red-500 basis-full'>{error}</span>}
      <Button disabled={isPending}>
        {mode === 'edit' ? 'Modifier les informations' : 'Ajouter un enfant'}
      </Button>
    </form>
  );
};

export default StudentForm;
