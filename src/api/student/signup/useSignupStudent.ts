import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import signupStudent from './api';
import { SignupStudentDto } from './shema';

const useSignupStudent = () => {
  const { user, token } = useAuth();

  return useMutation({
    mutationFn: async (data: SignupStudentDto) =>
      await signupStudent(
        { ...data, tutor_id: user ? user.id : undefined },
        token
      ),
  });
};

export default useSignupStudent;
