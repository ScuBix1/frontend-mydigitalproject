import { httpRequest } from '@/api/client';
import { UpdateTutorDto } from '@/types/tutor';

export const updateTutor = async (
  data: UpdateTutorDto,
  token: string,
  tutorId?: number
) => {
  const response = await httpRequest<UpdateTutorDto>({
    url: `${import.meta.env.VITE_API_URL}/tutors/${tutorId}`,
    method: 'PATCH',
    data,
    token,
  });

  if (!response.ok) {
    throw new Error(response.error.message || 'Une erreur est survenue');
  }

  return response.data;
};
