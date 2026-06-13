import { useSyncExternalStore, type ReactNode } from 'react';

type ClientOnlyProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

const emptySubscribe = () => () => {};

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!isClient) {
    return fallback;
  }

  return children;
}
