import { SignupStudentDto } from '@/api/student/signup/shema';
import useSignupStudent from '@/api/student/signup/useSignupStudent';
import useStudentsWithProgression from '@/api/tutor/students/getStudentProgression/useStudentsWithProgression';
import Button from '@/components/Button/Button';
import Panel from '@/components/Panel/Panel';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import StudentForm from '@/components/Student/StudentForm/StudentForm';
import StudentProgressionCard from '@/components/Student/StudentProgressionCard/StudentProgressionCard';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { getColorAvatar } from '@/lib/getColorAvatar';
import sortBy from '@/lib/sort';
import { Link } from 'react-router-dom';
import ConnectedTemplate from '../../../template/ConnectedTemplate';

const Dashboard = () => {
  const { user } = useAuthContext();
  const isTutor = user && user.role === 'tutor';

  const {
    isLoading,
    isError,
    students: studentsProgression,
  } = useStudentsWithProgression();

  const students = sortBy(studentsProgression, 'progression', 'desc');

  const {
    mutate: studentMutate,
    isPending,
    error: studentError,
  } = useSignupStudent();

  const onSubmit = (data: SignupStudentDto) => {
    studentMutate(data);
  };

  if (isLoading) return <div className='text-black'>Chargement ...</div>;

  if (isError) {
    return null;
  }

  return (
    <ConnectedTemplate
      headerContent={
        <div className='flex flex-col gap-2 items-center justify-center text-center'>
          <img
            className='w-[50px]'
            src='/assets/images/book.png'
            alt='Livre illustration'
          />
          <h1 className='text-h1 text-[var(--foreground-secondary)]'>
            {students && students.length > 0
              ? 'Tableau de bord'
              : 'Créer un enfant'}
          </h1>
        </div>
      }
      isDashboard
      isTutor={isTutor}
    >
      {students === undefined || (students && students.length === 0) ? (
        <div className='flex flex-col items-center'>
          <StudentForm
            onSubmit={onSubmit}
            isPending={isPending}
            error={studentError?.message}
            mode='create'
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
            className='h-full'
          >
            {students?.map(
              (student, index) =>
                index < 3 && (
                  <div
                    className='flex gap-9 items-center'
                    key={`student-progression-${index}`}
                  >
                    <div className='basis-1/3 flex flex-col items-center justify-center gap-2 sm:justify-start md:flex-row'>
                      <div
                        className='w-[25px] h-[25px]'
                        style={{
                          backgroundColor: getColorAvatar(student.avatar),
                        }}
                      ></div>
                      <div>{student.firstname}</div>
                    </div>
                    <div className='basis-2/3'>
                      <ProgressBar
                        variant='student'
                        progress={student.progression}
                      />
                    </div>
                  </div>
                )
            )}
          </Panel>
          <div className='flex flex-col gap-y-4 items-end'>
            <Panel title={<h2 className='w-full text-center'>Résultats</h2>}>
              <div className='flex flex-col items-center justify-center gap-8 md:gap-3 md:flex-row md:flex-nowrap'>
                {students?.map((student, index) => {
                  if (index < 3) {
                    return (
                      <StudentProgressionCard
                        key={`student-progression-card-${index}`}
                        avatar={student.avatar}
                        firstname={student.firstname}
                        progression={student.progression}
                        studentId={student.id}
                      />
                    );
                  }
                })}
              </div>
            </Panel>
            <Button asChild>
              <Link to='/tutor/all-students'>Liste enfants</Link>
            </Button>
          </div>
        </div>
      )}
    </ConnectedTemplate>
  );
};

export default Dashboard;
