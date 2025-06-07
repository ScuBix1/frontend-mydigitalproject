import { useAuth } from '@/context/auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getStudents } from './api';

export const queryKey = '/tutors/{tutorId}/students';

const useStudents = () => {
  const { user, token, isLoading } = useAuth();

  return useQuery({
    queryKey: [queryKey, user?.id],
    queryFn: async () => await getStudents(user!.id as number, token),
    enabled: !isLoading && !!user?.id && !!token,
  });
};

export default useStudents;
