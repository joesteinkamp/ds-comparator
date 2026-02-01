'use client';

import { Tabs as LightningTabs, TabsPanel } from '@salesforce/design-system-react';
import { UniversalTabsProps } from '@/lib/types/component-props';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const selectedIndex = tabs.findIndex((tab) => tab.value === value) || 0;

  return (
    <LightningTabs
      id="lightning-tabs"
      defaultSelectedIndex={selectedIndex}
      onSelect={(index: number) => onChange?.(tabs[index]?.value)}
    >
      {tabs.map((tab) => (
        <TabsPanel key={tab.value} label={tab.label}>
          {tab.content}
        </TabsPanel>
      ))}
    </LightningTabs>
  );
}
