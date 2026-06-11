import { Control, FieldPath, FieldValues } from 'react-hook-form';

export type BaseFieldProps<T extends FieldValues> = {
  control?: Control<T>;
  name: FieldPath<T>;
  label?: React.ReactNode | string;
  description?: React.ReactNode | string;
  id?: string;
};
