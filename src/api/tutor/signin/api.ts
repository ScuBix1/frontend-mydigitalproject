import { httpRequest } from '../../client';
import { SigninTutorDto } from './schema';

export const signinTutor = async (data: SigninTutorDto) => {
  const response = await httpRequest<
    | {
        message: string;
      }
    | { email: string; access_token: string }
  >({
    url: `${import.meta.env.VITE_API_URL}/auth/tutor-login`,
    method: 'POST',
    data: {
      ...data,
    },
  });

  if (!response.ok) {
    throw new Error(response.error.message || 'Une erreur est survenue');
  }

  return response.data;
};
