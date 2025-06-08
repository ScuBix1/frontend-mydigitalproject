import { z } from 'zod';

export const signinStudentSchema = z.object({
  username: z.string().min(1, { message: "Le nom d'utilisateur est requis." }),
  password: z
    .string()
    .min(1, { message: 'Le mot de passe est requis.' })
    .min(8, { message: 'Le mot de passe est trop court.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/, {
      message:
        '1 majuscule, 1 minuscule, 8 caractères et un caractère spécial minimum requis.',
    }),
});

export type SigninStudentDto = z.infer<typeof signinStudentSchema>;
