'use client';

import { Tabs as CarbonTabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import { UniversalTabsProps } from '@/lib/types/component-props';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const selectedIndex = tabs.findIndex((tab) => tab.value === value) || 0;

  return (
    <CarbonTabs
      selectedIndex={selectedIndex}
      onChange={(evt: any) => onChange?.(tabs[evt.selectedIndex]?.value)}
    >
      <TabList aria-label="Tabs">
        {tabs.map((tab) => (
          <Tab key={tab.value}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.value}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </CarbonTabs>
  );
}
