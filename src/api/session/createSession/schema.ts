import { z } from 'zod';

export const createSessionSchema = z.object({
  game_id: z.number(),
  student_id: z.number(),
});

export type CreateSessionDto = z.infer<typeof createSessionSchema>;
