'use client';

import { PATHS } from '@/shared/config';
import { TokenService } from '@/shared/services';
import { ClientOnly } from '@/shared/ui/client-only';
import { Button } from '@heroui/react';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export function AuthWidget() {
  const isAuthenticated = TokenService.getAccessToken();

  return (
    <ClientOnly>
      {isAuthenticated ? (
        <Button variant="ghost" isIconOnly>
          <MenuIcon />
        </Button>
      ) : (
        <Button>
          <Link href={PATHS.signIn}>Вход | Регистрация</Link>
        </Button>
      )}
    </ClientOnly>
  );
}
