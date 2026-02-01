'use client';

import { Tabs as PolarisTabs } from '@shopify/polaris';
import { UniversalTabsProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const [selected, setSelected] = useState(
    tabs.findIndex((tab) => tab.value === value) || 0
  );

  const handleTabChange = (selectedTabIndex: number) => {
    setSelected(selectedTabIndex);
    onChange?.(tabs[selectedTabIndex].value);
  };

  const tabItems = tabs.map((tab) => ({
    id: tab.value,
    content: tab.label,
    panelID: `${tab.value}-panel`,
  }));

  return (
    <PolarisTabs tabs={tabItems} selected={selected} onSelect={handleTabChange}>
      <div className="mt-4">
        {tabs[selected]?.content}
      </div>
    </PolarisTabs>
  );
}
