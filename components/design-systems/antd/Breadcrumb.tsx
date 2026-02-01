'use client';

import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  const breadcrumbItems = items.map((item) => ({
    title: item.href && item.href !== '#' ? <a href={item.href}>{item.label}</a> : item.label,
  }));

  return <AntdBreadcrumb items={breadcrumbItems} />;
}
