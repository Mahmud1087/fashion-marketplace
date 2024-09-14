import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,16}$/,
      {
        message:
          'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one special character',
      }
    ),
});

export const registerFormSchema = z
  .object({
    fullName: z
      .string()
      .min(5, { message: 'Name must be at least 5 characters' }),
    email: z.string().email({
      message: 'Email is required',
    }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,16}$/,
        {
          message:
            'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one special character',
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
