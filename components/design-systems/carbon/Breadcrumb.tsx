'use client';

import { Breadcrumb as CarbonBreadcrumb, BreadcrumbItem } from '@carbon/react';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <CarbonBreadcrumb>
      {items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          href={item.href || '#'}
          isCurrentPage={index === items.length - 1}
        >
          {item.label}
        </BreadcrumbItem>
      ))}
    </CarbonBreadcrumb>
  );
}
