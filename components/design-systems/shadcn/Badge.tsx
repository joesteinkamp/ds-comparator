'use client';

import { Badge as ShadcnBadge } from '@/components/ui/badge';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedVariant = (variantMapping.Badge as any)[variant]?.shadcn as any || 'default';

  return (
    <ShadcnBadge variant={mappedVariant}>
      {label}
    </ShadcnBadge>
  );
}
