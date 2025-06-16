import { httpRequest } from '@/api/client';

const getAllSubscriptions = async (token?: string) => {
  const response = await httpRequest<Subscription[]>({
    url: `${import.meta.env.VITE_API_URL}/subscriptions`,
    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error(
      response.error.message || 'Erreur lors du chargement des abonnements'
    );
  }

  return response.data;
};

export default getAllSubscriptions;
