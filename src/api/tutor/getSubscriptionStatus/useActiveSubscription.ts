import { useAuthContext } from '@/context/auth/useAuthContext';
import { useQuery } from '@tanstack/react-query';
import getActiveSubscription from './api';

const useActiveSubscription = (tutorId?: number) => {
  const queryKey = `/tutors/{tutorId}/subscription-active`;
  const { token } = useAuthContext();
  return useQuery({
    queryKey: [queryKey, tutorId],
    queryFn: () => getActiveSubscription(tutorId, token),
    enabled: !!tutorId && !!token,
  });
};

export default useActiveSubscription;
