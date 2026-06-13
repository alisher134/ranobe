'use client';

import { ThemeProvider } from '@/modules/theme';
import { StoreProvider } from '@/shared/store';
import { Toast } from '@heroui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Toast.Provider placement="top end" />
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
}
