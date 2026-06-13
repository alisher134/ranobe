import { GuestRoute } from '@/modules/auth';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GuestRoute>
      <div className="flex min-h-screen items-center justify-center">
        {children}
      </div>
    </GuestRoute>
  );
}
