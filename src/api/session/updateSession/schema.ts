import { z } from 'zod';

export const updateSessionSchema = z.object({
  sessionId: z.number(),
  score: z.number().min(0).max(100),
});

export type UpdateScoreDto = z.infer<typeof updateSessionSchema>;
