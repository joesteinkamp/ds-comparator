'use client';

import { Chip } from '@mui/material';
import { UniversalBadgeProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function Badge({
  label,
  variant = 'default',
  size = 'medium',
}: UniversalBadgeProps) {
  const mappedColor = (variantMapping.Badge as any)[variant]?.mui as any || 'default';
  
  return (
    <Chip 
      label={label} 
      color={mappedColor === 'default' ? 'default' : mappedColor} 
      size={size === 'small' ? 'small' : 'medium'} 
    />
  );
}
