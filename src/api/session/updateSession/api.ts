import { httpRequest } from '@/api/client';
import { UpdateScoreDto } from './schema';

export const updateSession = async (data: UpdateScoreDto, token: string) => {
  const response = await httpRequest<UpdateScoreDto>({
    url: `${import.meta.env.VITE_API_URL}/sessions/${data.gameId}/${
      data.studentId
    }/high-score/${data.score}`,
    method: 'PATCH',
    data,
    token,
  });

  if (!response.ok) {
    throw new Error(
      response.error.message || 'Erreur lors de la mise à jour du score'
    );
  }

  return response.data;
};
