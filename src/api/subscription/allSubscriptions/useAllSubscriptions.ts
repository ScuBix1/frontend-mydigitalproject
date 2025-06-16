import { useAuthContext } from '@/context/auth/useAuthContext';
import { useQuery } from '@tanstack/react-query';
import getAllSubscriptions from './api';

export const useAllSubscriptions = () => {
  const { token } = useAuthContext();

  return useQuery({
    queryKey: ['subscriptions'],
    queryFn: () => getAllSubscriptions(token),
    enabled: !!token,
  });
};
