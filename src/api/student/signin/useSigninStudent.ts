import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signinStudent } from './api';
import { SigninStudentDto } from './schema';

export const useSigninStudent = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SigninStudentDto) => await signinStudent(data),
    onSuccess: (data) => {
      if ('access_token' in data) {
        login(data.access_token);
        navigate('/student/dashboard');
      }
    },
  });
};
