import { z } from 'zod';

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, { message: "L'email est requis." })
    .email({ message: "L'email n'est pas au bon format." }),
  password: z
    .string()
    .min(1, { message: 'Le mot de passe est requis' })
    .min(8, { message: 'Le mot de passe est trop court.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/, {
      message:
        '1 majuscule, 1 minuscule, 8 caractères et un caractère spécial minimum requis.',
    }), //\W => ≠ [a-zA-Z0-9_]
  firstname: z.string().min(1, { message: 'Le prénom est requis.' }),
  lastname: z.string().min(1, { message: 'Le nom est requis.' }),
  dob: z.string().min(1, { message: 'La date de naissance est requise.' }),
});

export type SignupTutorDto = z.infer<typeof signupSchema>;
