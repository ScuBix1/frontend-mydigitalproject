import { httpRequest } from '../../client';
import { SignupTutorDto } from './schema';

export const signupTutor = async (data: SignupTutorDto) => {
  const res = await httpRequest<{ message: string }>({
    url: `${import.meta.env.VITE_API_URL}/tutors/sign-up`,
    method: 'POST',
    data: {
      ...data,
      admin_id: import.meta.env.VITE_ADMIN_ID,
    },
  });

  if (!res.ok) {
    throw new Error(res.error.message);
  }

  return res.data;
};
