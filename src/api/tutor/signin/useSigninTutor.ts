import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { signinTutor } from './api';
import { SigninTutorDto } from './schema';

export const useSigninTutor = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: (data: SigninTutorDto) => signinTutor(data),
    onSuccess: (data) => {
      if ('access_token' in data) {
        login(data.access_token);
      }
    },
  });
};
