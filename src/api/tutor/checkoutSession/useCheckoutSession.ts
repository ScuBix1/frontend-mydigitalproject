import { useAuthContext } from '@/context/auth/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import getCheckoutLink from './api';
import { CheckoutForm } from './schema';

export const useCheckoutSession = () => {
  const { token } = useAuthContext();

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
