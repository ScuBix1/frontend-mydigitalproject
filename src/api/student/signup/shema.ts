import { z } from 'zod';

export const signupStudentSchema = z.object({
  firstname: z.string().min(1, { message: 'Le prénom est requis' }),
  lastname: z.string().min(1, { message: 'Le nom est requis' }),
  username: z.string().min(1, { message: 'Le pseudo est requis' }),
  grade: z.string().min(1, { message: 'Le niveau est requis' }),
  password: z.string().min(1, { message: 'Le mot de passe est requis' }),
  tutor_id: z.number().optional(),
  avatar: z.string().optional(),
});

export type SignupStudentDto = z.infer<typeof signupStudentSchema>;
