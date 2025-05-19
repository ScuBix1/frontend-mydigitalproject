import { httpRequest } from '../../../client';
import { SendEmailDto } from './schema';

const sendEmail = async (data: SendEmailDto) => {
  const response = await httpRequest<{
    message: string;
  }>({
    url: `${import.meta.env.VITE_API_URL}/tutors/verification-otp`,
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

export default sendEmail;
