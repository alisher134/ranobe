'use client';

import { TokenService } from '@/shared/services';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isAuthenticated = !!TokenService.getAccessToken();

  useEffect(() => {
    if (isAuthenticated) router.back();
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null;

  return children;
}
