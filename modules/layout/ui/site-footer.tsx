import Link from 'next/link';

const FOOTER_NAV_LINKS: { id: number; href: string; title: string }[] = [
  {
    id: 1,
    href: '/',
    title: 'Обратная связь',
  },
  {
    id: 2,
    href: '/',
    title: 'Пользовательское соглашение',
  },
  {
    id: 3,
    href: '/',
    title: 'Политика конфиденциальности',
  },
  {
    id: 4,
    href: '/',
    title: 'Лицензионная оферта',
  },
  {
    id: 5,
    href: '/',
    title: 'Для правообладателей (DMCA)',
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-background-tertiary">
      <div className="app-container p-3">
        <div className="mb-3 text-sm">
          В случаях нарушения авторских прав - обращайтесь на почту
          <a
            className="hover:text-accent ml-1 underline"
            href="mail:info@ranobe.kz "
          >
            info@ranobe.kz
          </a>
        </div>

        <div className="mb-3 text-sm">
          По вопросам сотрудничества и PR -
          <a
            href="mail:info@ranobe.kz"
            className="hover:text-accent ml-1 underline"
          >
            info@ranobe.kz
          </a>
        </div>

        <ul className="flex items-center gap-4 text-sm">
          {FOOTER_NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="hover:text-accent underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
