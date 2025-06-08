import { httpRequest } from '@/api/client';
import { CheckoutForm } from './schema';

const getCheckoutLink = async (data: CheckoutForm, token: string) => {
  const response = await httpRequest<{ url: string }>({
    url: `${import.meta.env.VITE_API_URL}/stripe/checkout-session`,
    method: 'POST',
    token,
    data,
  });

  if (!response.ok) {
    throw new Error(
      response.error.message || "Erreur lors de l'envoie du lien"
    );
  }

  return response.data;
};

export default getCheckoutLink;
