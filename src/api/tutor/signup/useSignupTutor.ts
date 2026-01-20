import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useSigninTutor } from '../signin/useSigninTutor';
import { signupTutor } from './api';
import { SignupTutorDto } from './schema';

//verification du mail annulé en hébergeant render gratuit (envoie de mail smtp indispo)
export const useSignupTutor = () => {
  const navigate = useNavigate();
  const { mutate } = useSigninTutor();
  // const { mutate: emailMutate } = useSendEmail();

  return useMutation({
    mutationFn: (data: SignupTutorDto) => signupTutor(data),

    onSuccess: (data) => {
      //   emailMutate({ email: variables.email });
      // navigate('/email-verification', { state: { email: variables.email } });
      if ('email' in data) {
        mutate({ email: data.email, password: data.password });
        navigate('/tutor/dashboard');
      }
      console.log(data);
    },
  });
};
