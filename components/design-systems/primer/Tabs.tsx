'use client';

import { UnderlineNav } from '@primer/react';
import { UniversalTabsProps } from '@/lib/types/component-props';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const activeTab = value || tabs[0]?.value || '';

  return (
    <div>
      <UnderlineNav aria-label="Tabs">
        {tabs.map((tab) => (
          <UnderlineNav.Item
            key={tab.value}
            aria-current={activeTab === tab.value ? 'page' : undefined}
            onSelect={() => onChange?.(tab.value)}
          >
            {tab.label}
          </UnderlineNav.Item>
        ))}
      </UnderlineNav>
      <div className="mt-4">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}
