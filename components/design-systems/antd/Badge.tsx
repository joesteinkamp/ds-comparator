'use client';

import { Tag } from 'antd';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedColor = (variantMapping.Badge as any)[variant]?.antd;

  return (
    <Tag color={mappedColor}>
      {label}
    </Tag>
  );
}
