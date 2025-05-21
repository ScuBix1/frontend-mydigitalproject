import { useAuth } from '@/context/auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getStudents } from './api';

export const queryKey = '/tutors/{tutorId}/students';

const useStudents = () => {
  const { user, token } = useAuth();

  return useQuery({
    queryKey: [queryKey, user?.id],
    queryFn: async () => await getStudents(user?.id as number, token),
  });
};

export default useStudents;
