import { z } from 'zod';

const birthdateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

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
  dob: z
    .string()
    .refine((value) => birthdateRegex.test(value), {
      message: 'Format attendu : jj/mm/aaaa',
    })
    .refine(
      (value) => {
        if (!value.match(birthdateRegex)) {
          return false;
        }

        const [, dayStr, monthStr, yearStr] = value.match(birthdateRegex)!;

        const day = parseInt(dayStr, 10);
        const month = parseInt(monthStr, 10);
        const year = parseInt(yearStr, 10);

        if (month < 1 || month > 12) return false;

        const maxDays = new Date(year, month, 0).getDate();
        if (day < 1 || day > maxDays) return false;

        const inputDate = new Date(year, month - 1, day);
        const today = new Date();

        if (inputDate > today) return false;
        if (year < 1900) return false;

        return true;
      },
      {
        message: 'Date de naissance invalide',
      }
    ),
});

export type SignupTutorDto = z.infer<typeof signupSchema>;
