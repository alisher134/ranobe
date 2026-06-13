'use client';

import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';
import { ThemeToggle } from '@/modules/theme';
import { CatalogDropdown } from '@/modules/catalog';
import { SearchDropdown } from '@/modules/search';
import { ForumDropdown } from '@/modules/forum';
import { MoreMenuDropdown } from '@/modules/more-menu';
import { AuthWidget } from '@/modules/auth';

export function StandardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader
        navigation={
          <ul className="flex items-center">
            <CatalogDropdown />
            <SearchDropdown />
            <ForumDropdown />
            <MoreMenuDropdown />
          </ul>
        }
        actions={
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <AuthWidget />
          </div>
        }
      />
      <main className="app-container min-h-screen py-3">{children}</main>
      <SiteFooter />
    </div>
  );
}
