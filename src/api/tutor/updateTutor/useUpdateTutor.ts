import { useAuthContext } from '@/context/auth/useAuthContext';
import { UpdateTutorDto } from '@/types/tutor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTutor } from './api';

export const useUpdateTutor = (tutorId?: number) => {
  const { token } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateTutorDto) => {
      if (!token) throw new Error('Token manquant');
      return updateTutor(data, token, tutorId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['/tutors/{tutorId}', tutorId],
      });
      queryClient.invalidateQueries({
        queryKey: ['/tutors/me'],
      });
    },
  });
};
