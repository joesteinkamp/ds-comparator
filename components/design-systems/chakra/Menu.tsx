'use client';

import { MenuRoot, MenuTrigger, MenuContent, MenuItem, Button } from '@chakra-ui/react';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        {trigger || <Button>Menu</Button>}
      </MenuTrigger>
      <MenuContent>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            value={item.label}
            onClick={item.onClick}
            disabled={item.disabled}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
