'use client';

import { Label } from '@primer/react'; // Token, Label, CounterLabel? "Label" is visually a badge.
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedVariant = (variantMapping.Badge as any)[variant]?.primer as any || 'accent';

  return (
    <Label variant={mappedVariant}>
      {label}
    </Label>
  );
}
