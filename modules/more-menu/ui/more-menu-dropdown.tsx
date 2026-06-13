import { Button } from '@heroui/react';
import { EllipsisIcon } from 'lucide-react';

export function MoreMenuDropdown() {
  return (
    <Button variant="ghost" isIconOnly>
      <EllipsisIcon />
    </Button>
  );
}
