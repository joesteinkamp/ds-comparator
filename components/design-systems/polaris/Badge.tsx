'use client';

import { Badge as PolarisBadge } from '@shopify/polaris';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedTone = (variantMapping.Badge as any)[variant]?.polaris as any;

  return (
    <PolarisBadge tone={mappedTone}>
      {label}
    </PolarisBadge>
  );
}
