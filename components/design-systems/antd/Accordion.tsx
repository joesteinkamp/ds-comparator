'use client';

import { Collapse } from 'antd';
import { UniversalAccordionProps } from '@/lib/types/component-props';

export default function Accordion({
  items,
  multiple = false,
}: UniversalAccordionProps) {
  const collapseItems = items.map((item, index) => ({
    key: String(index),
    label: item.title,
    children: item.content,
  }));

  return (
    <Collapse
      items={collapseItems}
      accordion={!multiple}
    />
  );
}
