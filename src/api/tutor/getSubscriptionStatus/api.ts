import { httpRequest } from '@/api/client';

const getActiveSubscription = async (idTutor?: number, token?: string) => {
  const response = await httpRequest<{
    subscription_active: boolean;
    type: string;
  }>({
    url: `${
      import.meta.env.VITE_API_URL
    }/tutors/${idTutor}/subscription-status`,
    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la vérification !');
  }

  return response.data;
};

export default getActiveSubscription;
