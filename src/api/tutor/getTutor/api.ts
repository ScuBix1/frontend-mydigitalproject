import { httpRequest } from '@/api/client';
import { Tutor } from '@/types/tutor';

export const getTutor = async (token: string) => {
  const response = await httpRequest<Tutor>({
    url: `${import.meta.env.VITE_API_URL}/tutors/me`,
    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error(
      response.error.message || 'Erreur lors de la récupération du profil'
    );
  }

  return response.data;
};
