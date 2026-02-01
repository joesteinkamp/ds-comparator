'use client';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        <BreadcrumbsItem
          key={index}
          href={item.href || '#'}
          text={item.label}
        />
      ))}
    </Breadcrumbs>
  );
}
