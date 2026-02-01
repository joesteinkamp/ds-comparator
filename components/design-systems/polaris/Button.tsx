'use client';

import { Button as BasePolarisButton } from '@shopify/polaris';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function PolarisButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedVariant = variantMapping.Button[variant]?.polaris as any;
  const mappedSize = variantMapping.size[size]?.polaris as any;

  return (
    <BasePolarisButton
      variant={mappedVariant}
      size={mappedSize}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      tone={variant === 'destructive' ? 'critical' : undefined}
    >
      {label}
    </BasePolarisButton>
  );
}
