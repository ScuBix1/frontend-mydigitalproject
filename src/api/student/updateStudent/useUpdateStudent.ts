import { useAuth } from '@/context/auth/AuthContext';
import { UpdateStudentDto } from '@/types/student';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStudent } from './api';

export const useUpdateStudent = (studentId?: string) => {
  const { token, user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateStudentDto) => {
      if (!token) throw new Error('Token manquant');
      return updateStudent(data, token, studentId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['/tutors/{tutorId}/students', user?.id],
      });
      queryClient.invalidateQueries({
        queryKey: ['/students/{studentId}', studentId],
      });
    },
  });
};
