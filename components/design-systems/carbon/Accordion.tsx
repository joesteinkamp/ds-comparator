'use client';

import {
  Accordion as CarbonAccordion,
  AccordionItem,
} from '@carbon/react';
import { UniversalAccordionProps } from '@/lib/types/component-props';

export default function Accordion({
  items,
}: UniversalAccordionProps) {
  return (
    <CarbonAccordion>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </CarbonAccordion>
  );
}
