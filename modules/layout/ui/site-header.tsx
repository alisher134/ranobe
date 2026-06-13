import { PATHS } from '@/shared/config';
import Link from 'next/link';

type SiteHeaderProps = {
  navigation: React.ReactNode;
  actions: React.ReactNode;
};

export function SiteHeader({ navigation, actions }: SiteHeaderProps) {
  return (
    <header className="bg-background-tertiary">
      <div className="app-container flex items-center justify-between p-3">
        <Link
          href={PATHS.home}
          className="text-2xl font-bold tracking-wider transition-opacity hover:opacity-70"
        >
          Ranobe
        </Link>

        {navigation && <nav>{navigation}</nav>}

        <div className="flex items-center gap-5">{actions}</div>
      </div>
    </header>
  );
}
