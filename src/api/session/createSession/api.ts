import { httpRequest } from '@/api/client';
import { CreateSessionDto } from './schema';

export const createSession = async (data: CreateSessionDto, token: string) => {
  const response = await httpRequest<{
    session: { id: number; score: number };
    game: number;
    student: number;
  }>({
    url: `${import.meta.env.VITE_API_URL}/sessions`,
    method: 'POST',
    data,
    token,
  });

  if (!response.ok) {
    throw new Error(
      response.error.message || 'Erreur lors de la création de la session'
    );
  }

  return response.data;
};
