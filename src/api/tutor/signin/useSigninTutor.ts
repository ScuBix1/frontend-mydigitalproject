import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signinTutor } from './api';
import { SigninTutorDto } from './schema';

export const useSigninTutor = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SigninTutorDto) => await signinTutor(data),
    onSuccess: (data) => {
      if ('access_token' in data) {
        login(data.access_token);
        navigate('/tutor/dashboard');
      }
    },
  });
};
