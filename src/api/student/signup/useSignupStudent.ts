import { queryKey } from '@/api/tutor/students/getStudents/useStudents';
import { useAuth } from '@/context/auth/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import signupStudent from './api';
import { SignupStudentDto } from './shema';

const useSignupStudent = () => {
  const { user, token } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SignupStudentDto) =>
      await signupStudent(
        { ...data, tutor_id: user ? user.id : undefined },
        token
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      navigate('/tutor/dashboard');
    },
  });
};

export default useSignupStudent;
