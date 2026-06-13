import { StandardLayout } from '@/modules/layout';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StandardLayout>{children}</StandardLayout>;
}
