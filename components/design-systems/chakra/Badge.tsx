'use client';

import { Badge as ChakraBadge } from '@chakra-ui/react';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedColor = (variantMapping.Badge as any)[variant]?.chakra || 'gray';
  
  return (
    <ChakraBadge colorPalette={mappedColor}>
      {label}
    </ChakraBadge>
  );
}
