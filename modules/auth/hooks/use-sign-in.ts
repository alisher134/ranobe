'use client';

import { useZodForm } from '@/shared/hooks';
import { SignInFormValues, SignInSchema } from '../models/schemas';

export const useSignIn = () => {
  const form = useZodForm(SignInSchema, {
    defaultValues: {
      nickName: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
    error: null,
  };
};
