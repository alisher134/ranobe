import { FieldValues } from 'react-hook-form';
import { FormTextField } from './text-field';
import { BaseFieldProps } from './types';

type FormEmailFieldProps<T extends FieldValues> = BaseFieldProps<T> &
  Omit<React.ComponentProps<'input'>, 'name' | 'id' | 'defaultValue' | 'type'>;

export function FormEmailField<T extends FieldValues>(
  props: FormEmailFieldProps<T>,
) {
  return <FormTextField type="email" {...props} />;
}
