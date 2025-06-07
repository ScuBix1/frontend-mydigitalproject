import useStudentsWithProgression from '@/api/tutor/students/getStudentProgression/useStudentsWithProgression';
import StudentProgressionCard from '@/components/Student/StudentProgressionCard/StudentProgressionCard';
import sortBy from '@/lib/sort';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import { useEffect, useMemo, useRef, useState } from 'react';
import SortButton from './SortButton/SortButton';

const AllStudents = () => {
  const { students: studentsWithProgression } = useStudentsWithProgression();
  const [sortType, setSortType] = useState<'default' | 'progression'>(
    'default'
  );

  const firstCardRef = useRef<HTMLDivElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  const updateOffset = () => {
    if (firstCardRef.current) {
      setLeftOffset(firstCardRef.current.offsetLeft);
    }
  };

  useEffect(() => {
    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    if (firstCardRef.current) {
      observer.observe(firstCardRef.current);
    }
    window.addEventListener('resize', updateOffset);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateOffset);
    };
  }, [studentsWithProgression]);

  const sortedStudents = useMemo(() => {
    if (!studentsWithProgression) return [];

    if (sortType === 'progression') {
      return sortBy(studentsWithProgression, 'progression', 'desc');
    }

    return studentsWithProgression;
  }, [studentsWithProgression, sortType]);

  return (
    <ConnectedTemplate
      headerContent={
        <h1 className='text-h1 text-[var(--foreground-secondary)]'>
          Liste enfants
        </h1>
      }
      isTutor
    >
      {sortedStudents.length > 0 && (
        <div className='flex flex-col gap-y-4'>
          <div style={{ marginInline: `calc(${leftOffset}px - 15px)` }}>
            <SortButton
              value={sortType}
              onChange={(val) => setSortType(val as 'default' | 'progression')}
            />
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex flex-wrap gap-4 justify-center max-w-[1160px]'>
              {sortedStudents.map((student, index) => (
                <div
                  ref={index === 0 ? firstCardRef : undefined}
                  key={`student-${student.id}`}
                >
                  <StudentProgressionCard
                    progression={student.progression}
                    firstname={student.firstname}
                    avatar={student.avatar}
                    studentId={student.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ConnectedTemplate>
  );
};

export default AllStudents;
