'use client';

import { Tabs as MuiTabs, Tab, Box } from '@mui/material';
import { UniversalTabsProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  const [activeTab, setActiveTab] = useState(value || tabs[0]?.value);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    onChange?.(newValue);
  };

  return (
    <Box>
      <MuiTabs value={activeTab} onChange={handleChange}>
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </MuiTabs>
      {tabs.map((tab) => (
        <div key={tab.value} hidden={activeTab !== tab.value}>
          <Box sx={{ p: 2 }}>{tab.content}</Box>
        </div>
      ))}
    </Box>
  );
}
