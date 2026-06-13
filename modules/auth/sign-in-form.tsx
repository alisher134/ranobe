'use client';

import { useSignIn } from './hooks/use-sign-in';
import { FormPasswordField, FormTextField } from '@/shared/ui/form';
import { AuthRedirect } from './ui/auth-redirect';
import { AuthCard } from './ui/auth-card';
import { AuthForm } from './ui/auth-form';
import { AuthSubmitButton } from './ui/auth-submit-button';
import Link from 'next/link';
import { PATHS } from '@/shared/config';

export function SignInForm() {
  const { form, onSubmit, isLoading } = useSignIn();

  return (
    <AuthCard>
      <AuthForm form={form} onSubmit={onSubmit}>
        <FormTextField name="identity" label="Никнейм или Email" />

        <FormPasswordField
          name="password"
          label="Пароль"
          description={
            <div className="flex justify-end">
              <Link href={PATHS.forgotPassword} className="text-sm underline">
                Забыли пароль?
              </Link>
            </div>
          }
        />

        <AuthSubmitButton isLoading={isLoading} isDisabled={isLoading}>
          Войти
        </AuthSubmitButton>
      </AuthForm>

      <AuthRedirect
        title="Нет аккаунта?"
        linkText="Зарегистрируйтесь"
        redirectUrl={PATHS.signUp}
      />
    </AuthCard>
  );
}
