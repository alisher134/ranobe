import { Button } from '@heroui/react';
import { ChevronDownIcon, LayersIcon } from 'lucide-react';

export function CatalogDropdown() {
  return (
    <Button variant="ghost">
      <LayersIcon />
      Каталог
      <ChevronDownIcon />
    </Button>
  );
}
