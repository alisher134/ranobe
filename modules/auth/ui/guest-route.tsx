'use client';

import { PATHS } from '@/shared/config';
import { TokenService } from '@/shared/services';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isAuthenticated = !!TokenService.getAccessToken();

  useEffect(() => {
    if (isAuthenticated) router.replace(PATHS.home);
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null;

  return children;
}
