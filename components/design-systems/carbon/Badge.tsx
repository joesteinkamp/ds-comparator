'use client';

import { Tag } from '@carbon/react';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  return (
    <div className="text-sm text-muted-foreground italic border border-dashed border-border p-2 rounded text-center">
      Badge not available in Carbon
    </div>
  );
}
