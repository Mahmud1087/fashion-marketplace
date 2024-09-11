import { z } from 'zod';

const formSchema = z.object({
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

export const loginFormRequired = formSchema.required({
  email: true,
  password: true,
});

export const registerFormRequired = formSchema.required({
  email: true,
  password: true,
  // confirmPassword:true
});
