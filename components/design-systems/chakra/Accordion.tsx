'use client';

import { Accordion as ChakraAccordion } from '@chakra-ui/react';
import { UniversalAccordionProps } from '@/lib/types/component-props';

export default function Accordion({
  items,
  multiple = false,
}: UniversalAccordionProps) {
  return (
    <ChakraAccordion.Root multiple={multiple} collapsible>
      {items.map((item, index) => (
        <ChakraAccordion.Item key={index} value={String(index)}>
          <ChakraAccordion.ItemTrigger>
            {item.title}
            <ChakraAccordion.ItemIndicator />
          </ChakraAccordion.ItemTrigger>
          <ChakraAccordion.ItemContent>
            {item.content}
          </ChakraAccordion.ItemContent>
        </ChakraAccordion.Item>
      ))}
    </ChakraAccordion.Root>
  );
}
