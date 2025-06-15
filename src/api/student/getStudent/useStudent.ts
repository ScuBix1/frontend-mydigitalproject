import { useAuthContext } from '@/context/auth/useAuthContext';
import { useQuery } from '@tanstack/react-query';
import { getStudent } from './api';

const useStudent = (studentId?: string) => {
  const queryKey = `/students/{studentId}`;
  const { token } = useAuthContext();

  return useQuery({
    queryKey: [queryKey, studentId],
    queryFn: async () => await getStudent(studentId, token),
    enabled: !!studentId && !!token,
  });
};

export default useStudent;
