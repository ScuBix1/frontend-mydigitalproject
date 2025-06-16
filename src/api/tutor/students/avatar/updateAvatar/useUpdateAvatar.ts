import { useAuthContext } from '@/context/auth/useAuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKey } from '../../getStudents/useStudents';
import updateAvatar from './api';

const useUpdateAvatar = () => {
  const { token, user } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      studentId,
      avatar,
    }: {
      studentId: number;
      avatar: string;
    }) => {
      return await updateAvatar(studentId, avatar, token);
    },
    onSuccess: () => {
      if (user?.id) {
        queryClient.invalidateQueries({ queryKey: [queryKey, user.id] });
      }
    },
  });
};

export default useUpdateAvatar;
