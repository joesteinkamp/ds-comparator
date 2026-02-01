'use client';

import { Popover, ActionList, Button } from '@shopify/polaris';
import { UniversalMenuProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive((active) => !active);

  const activator = (
    <div onClick={toggleActive}>
      {trigger || <Button>Menu</Button>}
    </div>
  );

  return (
    <Popover
      active={active}
      activator={activator}
      onClose={toggleActive}
    >
      <ActionList
        items={items.map((item) => ({
          content: item.label,
          onAction: () => {
            item.onClick?.();
            toggleActive();
          },
          disabled: item.disabled,
        }))}
      />
    </Popover>
  );
}
