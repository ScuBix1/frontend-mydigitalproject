import { httpRequest } from '../../../client';
import { EmailVerificationDto } from './schema';

const emailVerificationTutor = async (data: EmailVerificationDto) => {
  const response = await httpRequest<
    { message: string } | { email: string; access_token: string }
  >({
    url: `${import.meta.env.VITE_API_URL}/tutors/verify`,
    method: 'PATCH',
    data: {
      ...data,
    },
  });

  if (!response.ok) {
    throw new Error(response.error.message || 'Une erreur est survenue');
  }

  return response.data;
};

export default emailVerificationTutor;
