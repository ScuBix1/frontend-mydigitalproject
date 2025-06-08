import useStudents from '@/api/tutor/students/getStudents/useStudents';
import { useAuth } from '@/context/auth/AuthContext';
import computeProgression from '@/lib/computeProgression';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import getStudentProgression from '../../../student/progression/api';

const useStudentsWithProgression = () => {
  const { data: students } = useStudents();
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const [studentsProgression, setStudentsProgression] = useState<
    { id: number; firstname: string; avatar: string; progression: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchAllProgressions = async () => {
      if (!students || !token) return;

      setIsLoading(true);
      setIsError(false);
      setError(null);

      try {
        const results = await Promise.all(
          students.map(async (student) => {
            const data = await queryClient.fetchQuery({
              queryKey: ['students-progression', student.id],
              queryFn: () =>
                getStudentProgression(student.id.toString(), token),
            });

            return {
              id: student.id,
              firstname: student.firstname,
              avatar: student.avatar,
              progression: computeProgression(data),
            };
          })
        );

        setStudentsProgression(results);
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProgressions();
  }, [students, token]);

  return {
    students: studentsProgression,
    isLoading,
    isError,
    error,
  };
};

export default useStudentsWithProgression;
