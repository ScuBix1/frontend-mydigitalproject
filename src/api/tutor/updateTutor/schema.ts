import { z } from 'zod';

export const updateTutorSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: 'Le prénom est obligatoire' })
    .optional(),
  lastname: z.string().min(1, { message: 'Le nom est obligatoire' }).optional(),
  email: z.string().email({ message: 'Email invalide' }).optional(),
  password: z
    .string()
    .min(8, { message: 'Le mot de passe est trop court.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/, {
      message:
        '1 majuscule, 1 minuscule, 8 caractères et un caractère spécial minimum requis.',
    })
    .optional(),
});

export type UpdateTutorForm = z.infer<typeof updateTutorSchema>;
