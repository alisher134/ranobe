type LoaderGateProps = {
  isLoading: boolean;
  loaderSlot?: React.ReactNode;
  children: React.ReactNode;
};

export function LoaderGate({
  isLoading,
  loaderSlot,
  children,
}: LoaderGateProps) {
  if (isLoading) return loaderSlot ?? <div>Загрузка...</div>;

  return children;
}
