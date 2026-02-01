'use client';

import { TabList, Tab } from '@fluentui/react-components';
import { UniversalTabsProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const [selectedValue, setSelectedValue] = useState(value || tabs[0]?.value);

  const handleChange = (_event: any, data: any) => {
    setSelectedValue(data.value);
    onChange?.(data.value);
  };

  return (
    <div>
      <TabList selectedValue={selectedValue} onTabSelect={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <div className="mt-4">
        {tabs.find((tab) => tab.value === selectedValue)?.content}
      </div>
    </div>
  );
}
