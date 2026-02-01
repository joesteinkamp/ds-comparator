'use client';

import { UniversalAccordionProps } from '@/lib/types/component-props';
import { ChevronDownIcon } from '@primer/octicons-react';
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
    <div className="border rounded">
      {items.map((item, index) => (
        <div key={index} className="border-b last:border-b-0">
          <button
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDownIcon
              className={`transition-transform ${
                openItems.has(index) ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openItems.has(index) && (
            <div className="p-4 pt-0">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
