'use client';

import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from '@atlaskit/dropdown-menu';
import { isValidElement, type ReactNode } from 'react';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  const triggerLabel = (() => {
    if (typeof trigger === 'string' || typeof trigger === 'number') {
      return String(trigger);
    }
    if (isValidElement<{ children?: ReactNode }>(trigger)) {
      const child = trigger.props.children;
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child);
      }
    }
    return 'Menu';
  })();

  return (
    <DropdownMenu trigger={triggerLabel}>
      <DropdownItemGroup>
        {items.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={item.onClick}
            isDisabled={item.disabled}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownItemGroup>
    </DropdownMenu>
  );
}
