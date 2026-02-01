'use client';

import { Badge as FluentBadge } from '@fluentui/react-components';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedAppearance = (variantMapping.Badge as any)[variant]?.fluent as any || 'filled';
  
  return (
    <FluentBadge appearance={mappedAppearance}>
      {label}
    </FluentBadge>
  );
}
