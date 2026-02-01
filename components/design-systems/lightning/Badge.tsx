'use client';

import { Badge as LightningBadge } from '@salesforce/design-system-react';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedColor = (variantMapping.Badge as any)[variant]?.lightning as any || 'default';

  return (
    <LightningBadge label={label} color={mappedColor} />
  );
}
