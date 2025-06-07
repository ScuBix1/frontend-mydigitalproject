import { httpRequest } from '@/api/client';

const updateAvatar = async (
  studentId: number,
  avatar: string,
  token?: string
) => {
  const response = await httpRequest({
    url: `${import.meta.env.VITE_API_URL}/students/${studentId}/avatar`,
    method: 'PATCH',
    token,
    data: {
      avatar,
    },
  });

  if (!response.ok) {
    throw new Error(response.error.message ?? 'Un problème est survenu');
  }

  return response.data;
};

export default updateAvatar;
