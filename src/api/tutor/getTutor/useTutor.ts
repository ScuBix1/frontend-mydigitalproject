import { useAuthContext } from '@/context/auth/useAuthContext';
import { useQuery } from '@tanstack/react-query';
import { getTutor } from './api';

export const useTutor = () => {
  const { token } = useAuthContext();

  return useQuery({
    queryKey: ['/tutors/me'],
    queryFn: () => {
      if (!token) throw new Error('Token manquant');
      return getTutor(token);
    },
    enabled: !!token,
  });
};
