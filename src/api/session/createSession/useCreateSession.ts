import { useAuthContext } from '@/context/auth/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { createSession } from './api';
import { CreateSessionDto } from './schema';

export const useCreateSession = () => {
  const { token } = useAuthContext();

  return useMutation({
    mutationFn: (data: CreateSessionDto) => {
      if (!token) throw new Error('Token manquant');
      return createSession(data, token);
    },
  });
};
