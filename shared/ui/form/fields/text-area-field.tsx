import {
  Description,
  FieldError,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { BaseFieldProps } from './types';
import { Show } from '../../show';

type FormTextareaFieldProps<T extends FieldValues> = BaseFieldProps<T> &
  Omit<React.ComponentProps<'textarea'>, 'name' | 'id' | 'defaultValue'>;

export function FormTextareaField<T extends FieldValues>({
  control: controlProp,
  name,
  label,
  description,
  id,
  ...textareaProps
}: FormTextareaFieldProps<T>) {
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

            <TextArea
              {...field}
              {...textareaProps}
              id={fieldId}
              aria-invalid={fieldState.invalid}
            />

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
