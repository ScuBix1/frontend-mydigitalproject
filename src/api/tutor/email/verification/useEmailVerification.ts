import { useMutation } from '@tanstack/react-query';
import emailVerificationTutor from './api';
import { EmailVerificationDto } from './schema';

export const useEmailVerification = () => {
  return useMutation({
    mutationFn: (data: EmailVerificationDto) => emailVerificationTutor(data),
  });
};
