import { useAuth } from '@/context/auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getTutor } from './api';

export const useTutor = () => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ['/tutors/me'],
    queryFn: () => {
      if (!token) throw new Error('Token manquant');
      return getTutor(token);
    },
    enabled: !!token,
  });
};
