import { useAuth } from '@/context/auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import getStudentProgression from './getStudentProgression';

export const useStudentProgression = (studentId: number) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ['student-progression', studentId],
    queryFn: () => getStudentProgression(studentId, token),
    enabled: !!studentId && !!token,
  });
};
