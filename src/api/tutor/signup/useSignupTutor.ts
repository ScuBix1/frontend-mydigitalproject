import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signupTutor } from './api';
import { SignupTutorDto } from './schema';

export const useSignupTutor = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupTutorDto) => signupTutor(data),
    onSuccess: () => {
      navigate('/');
    },
  });
};
