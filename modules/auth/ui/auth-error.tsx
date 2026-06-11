import { Show } from '@/shared/ui/show';
import { ErrorMessage } from '@heroui/react';

export function AuthError({ error }: { error: string | null }) {
  return (
    <Show when={!!error}>
      <ErrorMessage>{error}</ErrorMessage>
    </Show>
  );
}
