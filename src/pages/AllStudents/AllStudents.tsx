import useStudents from '@/api/tutor/students/getStudents/useStudents';
import StudentProgressionCard from '@/components/Student/StudentProgressionCard/StudentProgressionCard';
import ConnectedTemplate from '@/template/ConnectedTemplate';

const AllStudents = () => {
  const { data: students } = useStudents();

  return (
    <ConnectedTemplate
      headerContent={
        <>
          <h1 className='text-h1 text-[var(--foreground-secondary)]'>
            Liste enfants
          </h1>
        </>
      }
      isTutor
    >
      <div className='flex flex-col items-center'>
        <div className='flex flex-wrap gap-4 justify-center max-w-[1160px]'>
          {students?.map((student) => (
            <StudentProgressionCard
              studentId={student.id}
              firstname={student.firstname}
              avatar={student.avatar}
            />
          ))}
        </div>
      </div>
    </ConnectedTemplate>
  );
};

export default AllStudents;
