'use client';

import { Breadcrumbs } from '@primer/react';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        <Breadcrumbs.Item
          key={index}
          href={item.href || '#'}
          selected={index === items.length - 1}
        >
          {item.label}
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs>
  );
}
