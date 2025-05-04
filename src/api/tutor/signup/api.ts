import { httpRequest } from '../../client';
import { SignupTutorDto } from './schema';

export const signupTutor = async (data: SignupTutorDto) => {
  return httpRequest({
    url: `${import.meta.env.VITE_API_URL}/tutors/sign-up`,
    method: 'POST',
    data: {
      ...data,
      admin_id: import.meta.env.VITE_ADMIN_ID,
    },
  });
};
