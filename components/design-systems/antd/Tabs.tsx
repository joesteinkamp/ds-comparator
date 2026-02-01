'use client';

import { Tabs as AntdTabs } from 'antd';
import { UniversalTabsProps } from '@/lib/types/component-props';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const items = tabs.map((tab) => ({
    key: tab.value,
    label: tab.label,
    children: tab.content,
  }));

  return (
    <AntdTabs
      activeKey={value}
      onChange={onChange}
      items={items}
    />
  );
}
