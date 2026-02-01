'use client';

import { Tabs as ChakraTabs } from '@chakra-ui/react';
import { UniversalTabsProps } from '@/lib/types/component-props';

export default function Tabs({
  tabs,
  value,
  onChange,
}: UniversalTabsProps) {
  return (
    <ChakraTabs.Root value={value} onValueChange={(details) => onChange?.(details.value)}>
      <ChakraTabs.List>
        {tabs.map((tab) => (
          <ChakraTabs.Trigger key={tab.value} value={tab.value}>
            {tab.label}
          </ChakraTabs.Trigger>
        ))}
      </ChakraTabs.List>
      {tabs.map((tab) => (
        <ChakraTabs.Content key={tab.value} value={tab.value}>
          {tab.content}
        </ChakraTabs.Content>
      ))}
    </ChakraTabs.Root>
  );
}
