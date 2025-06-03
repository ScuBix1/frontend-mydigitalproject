import { useAuth } from '@/context/auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getStudent } from './api';

const useStudent = (studentId?: string) => {
  const queryKey = `/students/{studentId}`;
  const { token } = useAuth();

  return useQuery({
    queryKey: [queryKey, studentId],
    queryFn: async () => await getStudent(studentId, token),
    enabled: !!studentId && !!token,
  });
};

export default useStudent;
