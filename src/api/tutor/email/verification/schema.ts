import { z } from 'zod';

export const emailVerificationSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, {
    message: 'Le code doit contenir exactement 6 chiffres',
  }),
});

export type EmailVerificationDto = z.infer<typeof emailVerificationSchema>;
