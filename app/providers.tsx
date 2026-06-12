'use client';

import { StoreProvider } from '@/shared/store';
import { Toast } from '@heroui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Toast.Provider placement="top end" />
      {children}
    </StoreProvider>
  );
}
