'use client';

import {
  Accordion as FluentAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from '@fluentui/react-components';
import { UniversalAccordionProps } from '@/lib/types/component-props';

export default function Accordion({
  items,
  multiple = false,
}: UniversalAccordionProps) {
  return (
    <FluentAccordion multiple={multiple} collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={String(index)}>
          <AccordionHeader>{item.title}</AccordionHeader>
          <AccordionPanel>{item.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </FluentAccordion>
  );
}
