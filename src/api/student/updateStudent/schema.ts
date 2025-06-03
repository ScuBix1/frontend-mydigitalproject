import { z } from 'zod';

export const updateStudentSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: 'Le prénom est obligatoire' })
    .optional(),
  lastname: z.string().min(1, { message: 'Le nom est obligatoire' }).optional(),
  email: z.string().email({ message: 'Email invalide' }).optional(),
  password: z
    .string()
    .min(1, { message: 'Le mot de passe est obligatoire' })
    .optional(),
  duration: z
    .number()
    .min(1)
    .max(60, { message: 'Durée entre 1 et 60 minutes' })
    .optional(),
  start_hour: z.string().optional(),
});

export type UpdateStudentForm = z.infer<typeof updateStudentSchema>;
