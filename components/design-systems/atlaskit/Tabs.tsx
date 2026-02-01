'use client';

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { UniversalTabsProps } from '@/lib/types/component-props';

export default function TabsComponent({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const selectedIndex = tabs.findIndex((tab) => tab.value === value) || 0;

  return (
    <Tabs
      id="atlaskit-tabs"
      onChange={(index: number) => onChange?.(tabs[index]?.value)}
      selected={selectedIndex}
    >
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab.value}>{tab.label}</Tab>
        ))}
      </TabList>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.value}>
          {selectedIndex === index && tab.content}
        </TabPanel>
      ))}
    </Tabs>
  );
}
