'use client';

import { Button as BaseLightningButton } from '@salesforce/design-system-react';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function LightningButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  onClick,
}: UniversalButtonProps) {
  const mappedVariant = variantMapping.Button[variant]?.lightning || 'brand';

  return (
    <BaseLightningButton
      variant={mappedVariant}
      disabled={disabled}
      onClick={onClick}
      label={label}
    />
  );
}
