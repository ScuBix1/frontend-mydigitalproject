import { useAuthContext } from '@/context/auth/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signupTutor } from './api';
import { SignupTutorDto } from './schema';

//verification du mail annulé en hébergeant render gratuit (envoie de mail smtp indispo)
export const useSignupTutor = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  // const { mutate: emailMutate } = useSendEmail();

  return useMutation({
    mutationFn: (data: SignupTutorDto) => signupTutor(data),

    onSuccess: (data) => {
      //   emailMutate({ email: variables.email });
      // navigate('/email-verification', { state: { email: variables.email } });
      if ('access_token' in data.signinResponse) {
        login(data.signinResponse.access_token);
        navigate('/tutor/dashboard');
      }
      console.log(data);
    },
  });
};
