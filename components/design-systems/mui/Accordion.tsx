'use client';

import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { UniversalAccordionProps } from '@/lib/types/component-props';

export default function Accordion({
  items,
}: UniversalAccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <MuiAccordion key={index}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            {item.title}
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
