'use client';

import { UniversalAccordionProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Accordion({
  items,
  multiple = false,
}: UniversalAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

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
    <div className="slds-accordion">
      {items.map((item, index) => (
        <div key={index} className="slds-accordion__list-item">
          <section className={`slds-accordion__section ${openItems.has(index) ? 'slds-is-open' : ''}`}>
            <div className="slds-accordion__summary">
              <h3 className="slds-accordion__summary-heading">
                <button
                  className="slds-button slds-button_reset slds-accordion__summary-action"
                  onClick={() => toggleItem(index)}
                  aria-controls={`accordion-details-${index}`}
                  aria-expanded={openItems.has(index)}
                >
                  <svg className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left" aria-hidden="true">
                    <use xlinkHref="https://unpkg.com/@salesforce-ux/design-system@2.24.2/assets/icons/utility-sprite/svg/symbols.svg#switch" />
                  </svg>
                  <span className="slds-accordion__summary-content">{item.title}</span>
                </button>
              </h3>
            </div>
            {openItems.has(index) && (
              <div className="slds-accordion__content" id={`accordion-details-${index}`}>
                {item.content}
              </div>
            )}
          </section>
        </div>
      ))}
    </div>
  );
}
