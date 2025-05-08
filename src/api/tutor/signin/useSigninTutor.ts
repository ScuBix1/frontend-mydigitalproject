import { useMutation } from '@tanstack/react-query';
import { signinTutor } from './api';
import { SigninTutorDto } from './schema';

export const useSigninTutor = () => {
  return useMutation({
    mutationFn: (data: SigninTutorDto) => signinTutor(data),
  });
};
