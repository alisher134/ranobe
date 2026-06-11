'use client';

import { useZodForm } from '@/shared/hooks';
import { SignUpFormValues, SignUpSchema } from '../models/schemas';

export const useSignUp = () => {
  const form = useZodForm(SignUpSchema, {
    defaultValues: {
      email: '',
      nickName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignUpFormValues) => {
    console.log(data);
  };

  return {
    form,
    onSubmit,
    error: null,
  };
};
