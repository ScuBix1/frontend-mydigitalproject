import { httpRequest } from '@/api/client';
import { Session } from '@/types/session';

const getStudentProgression = async (studentId?: string, token?: string) => {
  const response = await httpRequest<Session[]>({
    url: `${import.meta.env.VITE_API_URL}/students/${studentId}/progressions`,

    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error(
      response.error.message ||
        'Erreur lors de la récupération de la progression'
    );
  }

  return response.data;
};

export default getStudentProgression;
