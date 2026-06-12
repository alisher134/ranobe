import { toast as heroToast } from '@heroui/react';
import { getErrorMessage } from '../utils';

export function toastSuccess(message: string) {
  heroToast.success(message);
}

export function toastError(error: unknown, fallback: string) {
  heroToast.danger(getErrorMessage(error, fallback));
}
