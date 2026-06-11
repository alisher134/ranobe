import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import {
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { BaseFieldProps } from './types';
import { Show } from '../../show';

type FormTextFieldProps<T extends FieldValues> = BaseFieldProps<T> &
  Omit<React.ComponentProps<'input'>, 'name' | 'id' | 'defaultValue'>;

export function FormTextField<T extends FieldValues>({
  control: controlProp,
  name,
  label,
  id,
  description,
  ...inputProps
}: FormTextFieldProps<T>) {
  const { control: contextControl } = useFormContext<T>();
  const control = controlProp ?? contextControl;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const fieldId = id ?? String(name);

        return (
          <TextField isInvalid={fieldState.invalid}>
            <Show when={!!label}>
              <Label htmlFor={fieldId}>{label}</Label>
            </Show>

            <Input {...field} {...inputProps} id={fieldId} />

            <Show when={!!description}>
              <Description>{description}</Description>
            </Show>

            <Show when={fieldState.invalid}>
              <FieldError>{fieldState.error?.message}</FieldError>
            </Show>
          </TextField>
        );
      }}
    />
  );
}
