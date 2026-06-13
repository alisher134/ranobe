import z from 'zod';

export const SignInSchema = z.object({
  identity: z.string().min(1, 'Никнейм или Email обязателен'),
  password: z.string().min(1, 'Пароль обязателен'),
});

export const SignUpSchema = z
  .object({
    email: z.email('Некорректный email'),
    nickname: z.string().min(2, 'Никнейм должен быть не менее 2 символов'),
    password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
    confirmPassword: z
      .string()
      .min(6, 'Пароль должен быть не менее 6 символов'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type SignInFormValues = z.infer<typeof SignInSchema>;
export type SignUpFormValues = z.infer<typeof SignUpSchema>;
