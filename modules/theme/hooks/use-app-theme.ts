import { AppTheme } from '@/shared/types/types';
import { useTheme } from 'next-themes';

export function useAppTheme() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return {
    theme: theme as AppTheme | undefined,
    resolvedTheme: resolvedTheme as Exclude<AppTheme, 'system'> | undefined,
    setTheme: (theme: AppTheme) => setTheme(theme),
  };
}
