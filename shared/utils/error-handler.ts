import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export function isErrorWithMessage(
  error: unknown,
): error is { message: string; data?: unknown } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export function getErrorMessage(
  error: unknown,
  fallbackMessage = 'Произошла неизвестная ошибка',
): string {
  if (!error) return fallbackMessage;

  if (isFetchBaseQueryError(error)) {
    const data = error.data as Record<string, unknown> | undefined;
    if (data && typeof data.message === 'string') {
      return data.message;
    }

    switch (error.status) {
      case 'FETCH_ERROR':
        return 'Ошибка сети. Проверьте подключение к интернету.';
      case 'TIMEOUT_ERROR':
        return 'Превышено время ожидания ответа от сервера.';
      case 400:
        return 'Неверный запрос. Проверьте введенные данные.';
      case 401:
        return 'Неверный логин или пароль.';
      case 403:
        return 'У вас нет прав для выполнения этого действия.';
      case 404:
        return 'Запрашиваемый ресурс не найден.';
      case 500:
        return 'Внутренняя ошибка сервера. Попробуйте позже.';
      default:
        return `Ошибка сервера: ${error.status}`;
    }
  }

  if (isErrorWithMessage(error)) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return fallbackMessage;
}
