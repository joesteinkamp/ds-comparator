'use client';

import { Breadcrumb as LightningBreadcrumb } from '@salesforce/design-system-react';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  const trail = items.map((item) => ({
    label: item.label,
    href: item.href || '#',
  }));

  return (
    <LightningBreadcrumb
      id="lightning-breadcrumb"
      trail={trail.map((item, index) => (
        <a key={`${item.href}-${index}`} href={item.href}>
          {item.label}
        </a>
      ))}
    />
  );
}
