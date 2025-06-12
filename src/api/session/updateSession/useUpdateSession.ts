import { useAuth } from '@/context/auth/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSession } from './api';
import { UpdateScoreDto } from './schema';

export const useUpdateSession = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateScoreDto) => {
      if (!token) throw new Error('Token manquant');
      return updateSession(data, token);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['/sessions/student', variables.gameId],
      });
    },
  });
};
