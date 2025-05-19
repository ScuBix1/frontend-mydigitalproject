import { z } from 'zod';

export const signupStudentSchema = z.object({
  firstname: z.string().min(1, { message: 'Le prénom est obligatoire' }),
  lastname: z.string().min(1, { message: 'Le prénom est obligatoire' }),
  username: z.string().min(1, { message: 'Le prénom est obligatoire' }),
  grade: z.string().min(1, { message: 'Le niveau est obligatoire' }),
  password: z.string().min(1, { message: 'Le prénom est obligatoire' }),
  tutor_id: z.number().optional(),
});

export type SignupStudentDto = z.infer<typeof signupStudentSchema>;
