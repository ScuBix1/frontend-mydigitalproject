import { useAuthContext } from '@/context/auth/useAuthContext';
import { useQuery } from '@tanstack/react-query';
import getStudentProgression from './api';
export function useStudentProgressions(studentId?: string) {
  const { user, token } = useAuthContext();

  return useQuery({
    queryKey: ['student', studentId, 'progressions'],
    queryFn: () => getStudentProgression(studentId, token),
    enabled: !!studentId && !!user && !!token,
  });
}
