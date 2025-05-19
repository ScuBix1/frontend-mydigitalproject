import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import signupStudent from './api';
import { SignupStudentDto } from './shema';

const useSignupStudent = () => {
  const { token, user } = useAuth();

  return useMutation({
    mutationFn: (data: SignupStudentDto) =>
      signupStudent(
        { ...data, tutor_id: user ? user.id : undefined },
        token ?? undefined
      ),
  });
};

export default useSignupStudent;
