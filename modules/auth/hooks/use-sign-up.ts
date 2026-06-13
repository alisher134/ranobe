'use client';

import { useZodForm } from '@/shared/hooks';
import { SignUpFormValues, SignUpSchema } from '../models/schemas';
import { useSignUpMutation } from '../api/authApi';
import { useRouter } from 'next/navigation';
import { toastError, toastSuccess } from '@/shared/lib';
import { PATHS } from '@/shared/config';

export const useSignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

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
      router.replace(PATHS.home);
    } catch (error) {
      toastError(error, 'Ошибка при регистрации');
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};
