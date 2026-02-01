'use client';

import {
  Menu as FluentMenu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Button,
} from '@fluentui/react-components';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  return (
    <FluentMenu>
      <MenuTrigger>
        {trigger ? <div>{trigger}</div> : <Button>Menu</Button>}
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </FluentMenu>
  );
}
