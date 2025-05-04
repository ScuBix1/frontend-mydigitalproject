import { useMutation } from '@tanstack/react-query';
import { signupTutor } from './api';
import { SignupTutorDto } from './schema';

export const useSignupTutor = () => {
  return useMutation({
    mutationFn: (data: SignupTutorDto) => signupTutor(data),
  });
};
