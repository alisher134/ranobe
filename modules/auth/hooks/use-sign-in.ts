'use client';

import { useZodForm } from '@/shared/hooks';
import { SignInFormValues, SignInSchema } from '../models/schemas';
import { useSignInMutation } from '../api/authApi';
import { useRouter } from 'next/navigation';
import { toastError, toastSuccess } from '@/shared/lib';

export const useSignIn = () => {
  const [signIn] = useSignInMutation();

  const form = useZodForm(SignInSchema, {
    defaultValues: {
      identity: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (data: SignInFormValues) => {
    try {
      await signIn(data).unwrap();
      toastSuccess('Авторизация успешна');
      router.replace('/');
    } catch (error) {
      toastError(error, 'Ошибка при входе');
    }
  };

  return {
    form,
    onSubmit,
  };
};
