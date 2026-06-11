import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { BaseFieldProps } from './types';
import { useState } from 'react';
import {
  Button,
  Description,
  FieldError,
  InputGroup,
  Label,
  TextField,
} from '@heroui/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Show } from '../../show';

type FormPasswordFieldProps<T extends FieldValues> = BaseFieldProps<T> & {
  autoComplete?: string;
};

export function FormPasswordField<T extends FieldValues>({
  control: controlProp,
  name,
  label,
  description,
  id,
  autoComplete,
}: FormPasswordFieldProps<T>) {
  const [visible, setVisible] = useState(false);

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

            <InputGroup>
              <InputGroup.Input
                {...field}
                id={fieldId}
                type={visible ? 'text' : 'password'}
                autoComplete={autoComplete}
                aria-invalid={fieldState.invalid}
              />

              <InputGroup.Suffix className="pr-1">
                <Button
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  type="button"
                  aria-label={visible ? 'Скрыть пароль' : 'Показать пароль'}
                  onClick={() => setVisible((current) => !current)}
                >
                  {visible ? <EyeOffIcon /> : <EyeIcon />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

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
