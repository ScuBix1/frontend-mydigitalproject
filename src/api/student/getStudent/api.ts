import { httpRequest } from '@/api/client';
import { Student } from '@/types/student';

export const getStudent = async (studentId?: string, token?: string) => {
  const response = await httpRequest<Student>({
    url: `${import.meta.env.VITE_API_URL}/students/${studentId}`,
    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error(response.error.message || 'Erreur lors du chargement');
  }

  return response.data;
};
