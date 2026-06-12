'use client';

import { useZodForm } from '@/shared/hooks';
import { SignUpFormValues, SignUpSchema } from '../models/schemas';
import { useSignUpMutation } from '../api/authApi';
import { useRouter } from 'next/navigation';
import { toastError, toastSuccess } from '@/shared/lib';

export const useSignUp = () => {
  const [signUp] = useSignUpMutation();

  const form = useZodForm(SignUpSchema, {
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      await signUp(data).unwrap();
      toastSuccess('Регистрация успешна');
      router.replace('/');
    } catch (error) {
      toastError(error, 'Ошибка при регистрации');
    }
  };

  return {
    form,
    onSubmit,
  };
};
