'use client';

import { StoreProvider } from '@/shared/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
