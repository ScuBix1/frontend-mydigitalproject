import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useSendEmail from '../email/send/useSendEmail';
import { signupTutor } from './api';
import { SignupTutorDto } from './schema';

export const useSignupTutor = () => {
  const navigate = useNavigate();
  const { mutate: emailMutate } = useSendEmail();

  return useMutation({
    mutationFn: (data: SignupTutorDto) => signupTutor(data),
    onSuccess: (_data, variables) => {
      emailMutate({ email: variables.email });
      navigate('/email-verification', { state: { email: variables.email } });
    },
  });
};
