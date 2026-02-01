'use client';

import { Collapsible, BlockStack, Text, Button, Box } from '@shopify/polaris';
import { UniversalAccordionProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Accordion({
  items,
  multiple = false,
}: UniversalAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      if (!multiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <BlockStack gap="200">
      {items.map((item, index) => (
        <Collapsible
          key={index}
          open={openItems.has(index)}
          id={`collapsible-${index}`}
          transition={{ duration: '200ms', timingFunction: 'ease-in-out' }}
        >
          <Button
            onClick={() => toggleItem(index)}
            ariaExpanded={openItems.has(index)}
            ariaControls={`collapsible-${index}`}
            fullWidth
            textAlign="left"
          >
            {item.title}
          </Button>
          <Box padding="400">
            {item.content}
          </Box>
        </Collapsible>
      ))}
    </BlockStack>
  );
}
