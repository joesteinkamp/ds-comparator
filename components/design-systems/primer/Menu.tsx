'use client';

import { ActionMenu, ActionList, Button } from '@primer/react';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  return (
    <ActionMenu>
      <ActionMenu.Anchor>
        <div>{trigger || <Button>Menu</Button>}</div>
      </ActionMenu.Anchor>
      <ActionMenu.Overlay>
        <ActionList>
          {items.map((item, index) => (
            <ActionList.Item
              key={index}
              onSelect={item.onClick}
              disabled={item.disabled}
            >
              {item.label}
            </ActionList.Item>
          ))}
        </ActionList>
      </ActionMenu.Overlay>
    </ActionMenu>
  );
}
