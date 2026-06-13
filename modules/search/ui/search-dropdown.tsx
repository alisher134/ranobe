import { Button } from '@heroui/react';
import { SearchIcon } from 'lucide-react';

export function SearchDropdown() {
  return (
    <Button variant="ghost">
      <SearchIcon />
      Поиск
    </Button>
  );
}
