'use client';

import { Breadcrumb as FluentBreadcrumb, BreadcrumbItem, BreadcrumbButton } from '@fluentui/react-components';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <FluentBreadcrumb>
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbButton
            href={item.href || '#'}
            current={index === items.length - 1}
          >
            {item.label}
          </BreadcrumbButton>
        </BreadcrumbItem>
      ))}
    </FluentBreadcrumb>
  );
}
