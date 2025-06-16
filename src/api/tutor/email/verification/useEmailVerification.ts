import { useAuthContext } from '@/context/auth/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import emailVerificationTutor from './api';
import { EmailVerificationDto } from './schema';

export const useEmailVerification = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: EmailVerificationDto) =>
      await emailVerificationTutor(data),
    onSuccess: (data) => {
      if ('access_token' in data) {
        login(data.access_token);
        navigate('/tutor/dashboard');
      }
    },
  });
};
