import { httpRequest } from '@/api/client';
import { SigninStudentDto } from './schema';

export const signinStudent = async (data: SigninStudentDto) => {
  const response = await httpRequest<
    { message: string } | { username: string; access_token: string }
  >({
    url: `${import.meta.env.VITE_API_URL}/auth/student-login`,
    method: 'POST',
    data,
  });

  if (!response.ok) {
    throw new Error(response.error.message || 'Une erreur est survenue');
  }

  return response.data;
};
