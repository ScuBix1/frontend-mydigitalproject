import { httpRequest } from '../../client';
import { SignupTutorDto } from './schema';

export const signupTutor = async (data: SignupTutorDto) => {
  const res = await httpRequest<
    | { message: string }
    | {
        email: string;
        access_token: string;
      }
  >({
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

  const responseSignIn = await httpRequest<
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

  if (!responseSignIn.ok) {
    throw new Error(responseSignIn.error.message || 'Une erreur est survenue');
  }

  return { response: res.data, signinResponse: responseSignIn.data };
};
