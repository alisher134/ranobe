'use client';

import { useSignIn } from './hooks/use-sign-in';
import { FormPasswordField, FormTextField } from '@/shared/ui/form';
import { AuthRedirect } from './ui/auth-redirect';
import { AuthCard } from './ui/auth-card';
import { AuthForm } from './ui/auth-form';
import { AuthSubmitButton } from './ui/auth-submit-button';
import { AuthError } from './ui/auth-error';
import Link from 'next/link';

export function SignInForm() {
  const { form, onSubmit, error } = useSignIn();

  return (
    <AuthCard>
      <AuthForm form={form} onSubmit={onSubmit}>
        <FormTextField name="nickName" label="Никнейм" />

        <FormPasswordField
          name="password"
          label="Пароль"
          description={
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm underline">
                Забыли пароль?
              </Link>
            </div>
          }
        />

        <AuthError error={error} />

        <AuthSubmitButton>Войти</AuthSubmitButton>
      </AuthForm>

      <AuthRedirect
        title="Нет аккаунта?"
        linkText="Зарегистрируйтесь"
        redirectUrl="/sign-up"
      />
    </AuthCard>
  );
}
