import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signupTutor } from './api';
import { SignupTutorDto } from './schema';

//verification du mail annulé en hébergeant render gratuit (envoie de mail smtp indispo)
export const useSignupTutor = () => {
  const navigate = useNavigate();
  // const { mutate: emailMutate } = useSendEmail();

  return useMutation({
    mutationFn: (data: SignupTutorDto) => signupTutor(data),

    onSuccess: (_data, _variables) => {
      //   emailMutate({ email: variables.email });
      // navigate('/email-verification', { state: { email: variables.email } });
      navigate('/tutor/dashboard');
    },
  });
};
