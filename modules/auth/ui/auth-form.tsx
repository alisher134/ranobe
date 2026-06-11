import { AppForm } from '@/shared/ui/form';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

type AuthFormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
};

export function AuthForm<T extends FieldValues>({
  children,
  form,
  onSubmit,
}: AuthFormProps<T>) {
  return (
    <AppForm form={form} onSubmit={onSubmit} className="mb-3.5">
      <div className="flex flex-col gap-3.5">{children}</div>
    </AppForm>
  );
}
