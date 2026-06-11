import type { FormHTMLAttributes, ReactNode } from 'react';
import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

type AppFormProps<T extends FieldValues> = {
  form: UseFormReturn<T, unknown, T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'>;

export function AppForm<T extends FieldValues>({
  form,
  onSubmit,
  children,
  noValidate = true,
  ...props
}: AppFormProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate={noValidate}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}
