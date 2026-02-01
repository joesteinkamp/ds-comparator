'use client';

import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  const menuItems: MenuProps['items'] = items.map((item, index) => ({
    key: String(index),
    label: item.label,
    onClick: item.onClick,
    disabled: item.disabled,
  }));

  return (
    <Dropdown menu={{ items: menuItems }}>
      {trigger || <Button>Menu</Button>}
    </Dropdown>
  );
}
