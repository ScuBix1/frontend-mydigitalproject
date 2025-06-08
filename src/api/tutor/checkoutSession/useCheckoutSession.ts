import { useAuth } from '@/context/auth/AuthContext';
import { useMutation } from '@tanstack/react-query';
import getCheckoutLink from './api';
import { CheckoutForm } from './schema';

export const useCheckoutSession = () => {
  const { token } = useAuth();

  return useMutation({
    mutationFn: (data: CheckoutForm) => {
      if (!token) throw new Error('Token manquant');
      return getCheckoutLink(data, token);
    },
    onSuccess: (data) => {
      window.location.href = data.url;
    },
  });
};
