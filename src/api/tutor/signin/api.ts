import { httpRequest } from '../../client';
import { SigninTutorDto } from './schema';

export const signinTutor = async (data: SigninTutorDto) => {
  return httpRequest({
    url: `${import.meta.env.VITE_API_URL}/tutors/sign-in`,
    method: 'POST',
    data: {
      ...data,
    },
  });
};
