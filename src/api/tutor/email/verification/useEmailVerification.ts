import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import emailVerificationTutor from './api';
import { EmailVerificationDto } from './schema';

export const useEmailVerification = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: (data: EmailVerificationDto) => emailVerificationTutor(data),
    onSuccess: (data) => {
      if ('access_token' in data) {
        login(data.access_token);
      }
    },
  });
};
