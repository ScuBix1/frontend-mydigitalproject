import { useAuth } from '@/context/auth/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getSessionExisting } from './api';

export const useSessionExisting = (studentId?: string, gameId?: string) => {
  const { token } = useAuth();

  return useQuery({
    queryKey: ['session-existing', studentId, gameId],
    queryFn: async () => {
      if (!studentId) throw new Error('studentId manquant');
      if (!token) throw new Error('token manquant');
      return await getSessionExisting(studentId, gameId, token);
    },
    enabled: !!studentId && !!token && !!gameId,
  });
};
