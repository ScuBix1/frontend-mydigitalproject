import { httpRequest } from '@/api/client';
import { Student } from '@/types/student';

export const getStudents = async (tutorId: number, token?: string) => {
  const response = await httpRequest<Student[]>({
    url: `${import.meta.env.VITE_API_URL}/tutors/${tutorId}/students`,
    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error(response.error.message ?? 'Un problème est survenu');
  }

  return response.data;
};
