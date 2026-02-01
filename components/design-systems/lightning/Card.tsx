'use client';

import { Card as LightningCard } from '@salesforce/design-system-react';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  return (
    <LightningCard
      heading={title}
      footer={footer}
    >
      <div className="slds-p-horizontal_medium slds-p-bottom_medium">
        {description && (
          <p className="slds-m-bottom_medium slds-text-color_weak">{description}</p>
        )}
        {children}
      </div>
    </LightningCard>
  );
}
