'use client';

import {
  FormEmailField,
  FormPasswordField,
  FormTextField,
} from '@/shared/ui/form';
import { useSignUp } from './hooks/use-sign-up';
import { AuthRedirect } from './ui/auth-redirect';
import { AuthCard } from './ui/auth-card';
import { AuthForm } from './ui/auth-form';
import { AuthSubmitButton } from './ui/auth-submit-button';
import { AuthError } from './ui/auth-error';

export function SignUpForm() {
  const { form, onSubmit, error } = useSignUp();

  return (
    <AuthCard>
      <AuthForm form={form} onSubmit={onSubmit}>
        <FormEmailField name="email" label="Email" />
        <FormTextField name="nickName" label="Никнейм" />
        <FormPasswordField name="password" label="Пароль" />
        <FormPasswordField name="confirmPassword" label="Подтвердите пароль" />

        <AuthError error={error} />

        <AuthSubmitButton>Зарегистрироваться</AuthSubmitButton>
      </AuthForm>

      <AuthRedirect
        title="Уже есть аккаунт?"
        linkText="Войдите"
        redirectUrl="/sign-in"
      />
    </AuthCard>
  );
}
