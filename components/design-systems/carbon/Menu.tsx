'use client';

import { Menu as CarbonMenu, MenuButton, MenuItem } from '@carbon/react';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  return (
    <CarbonMenu label="Menu">
      <MenuButton label={trigger ? 'Menu' : 'Menu'}>
        {trigger}
      </MenuButton>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          label={item.label}
          onClick={item.onClick}
          disabled={item.disabled}
        />
      ))}
    </CarbonMenu>
  );
}
