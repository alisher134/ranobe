'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useAppTheme } from '../hooks/use-app-theme';
import { Button } from '@heroui/react';
import { ClientOnly } from '@/shared/ui/client-only';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useAppTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ClientOnly>
      <Button isIconOnly variant="ghost" size="sm" onClick={toggleTheme}>
        {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </ClientOnly>
  );
}
