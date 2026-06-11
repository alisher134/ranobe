import { Button } from '@heroui/react';

type AuthSubmitButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
};

export function AuthSubmitButton({
  isDisabled,
  isLoading,
  children,
}: AuthSubmitButtonProps) {
  return (
    <Button
      fullWidth
      type="submit"
      isDisabled={isDisabled}
      isPending={isLoading}
    >
      {children}
    </Button>
  );
}
