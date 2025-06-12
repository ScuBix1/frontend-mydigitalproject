import { httpRequest } from '@/api/client';

export const getSessionExisting = async (
  studentId?: string,
  gameId?: string,
  token?: string
): Promise<boolean> => {
  const response = await httpRequest<{
    session_existing: boolean;
  }>({
    url: `/students/${studentId}/games/${gameId}/active-session-check`,
    method: 'GET',
    token,
  });

  if (!response.ok) {
    throw new Error(response.error.message);
  }

  return response.data.session_existing;
};
