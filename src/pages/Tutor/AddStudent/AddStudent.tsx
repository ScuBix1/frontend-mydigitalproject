import { SignupStudentDto } from '@/api/student/signup/shema';
import useSignupStudent from '@/api/student/signup/useSignupStudent';
import StudentForm from '@/components/Student/StudentForm/StudentForm';
import { useAuthContext } from '@/context/auth/useAuthContext';
import ConnectedTemplate from '@/template/ConnectedTemplate';

const AddStudent = () => {
  const {
    mutate: studentMutate,
    isPending,
    error: studentError,
  } = useSignupStudent();

  const { user } = useAuthContext();
  const isTutor = user && user.role === 'tutor';

  const handleCreateStudent = (data: SignupStudentDto) => {
    studentMutate(data);
  };

  return (
    <ConnectedTemplate
      headerContent={
        <div className='flex flex-col gap-2'>
          <h1 className='text-h1 text-[var(--foreground-secondary)]'>
            Ajouter un enfant
          </h1>
        </div>
      }
      isTutor={isTutor}
    >
      <div className='flex flex-col items-center mb-8'>
        <StudentForm
          mode='create'
          onSubmit={handleCreateStudent}
          isPending={isPending}
          error={studentError?.message}
        />
      </div>
    </ConnectedTemplate>
  );
};

export default AddStudent;
