'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { UniversalAccordionProps } from '@/lib/types/component-props';

export default function AccordionComponent({
  items,
  multiple = false,
}: UniversalAccordionProps) {
  return (
    <Accordion type={multiple ? 'multiple' : 'single'} collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
