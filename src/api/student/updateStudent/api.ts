import { httpRequest } from '@/api/client';
import { UpdateStudentDto } from '@/types/student';

export const updateStudent = async (
  data: UpdateStudentDto,
  token: string,
  studentId?: string
) => {
  const response = await httpRequest<UpdateStudentDto>({
    url: `${import.meta.env.VITE_API_URL}/students/${studentId}`,
    method: 'PATCH',
    data,
    token,
  });

  if (!response.ok) {
    throw new Error(response.error.message || 'Une erreur est survenue');
  }

  return response.data;
};

export default updateStudent;
