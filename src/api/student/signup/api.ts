import { httpRequest } from '@/api/client';
import { SignupStudentDto } from './shema';

const signupStudent = async (data: SignupStudentDto, token?: string) => {
  const response = await httpRequest<{ message: string }>({
    url: `${import.meta.env.VITE_API_URL}/students/sign-up`,
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    data: {
      ...data,
    },
  });

  if (!token) {
    throw new Error("Le tuteur n'existe pas");
  }

  if (!response.ok) {
    throw new Error(response.error.message || 'Une erreur est survenue');
  }

  return response.data;
};

export default signupStudent;
