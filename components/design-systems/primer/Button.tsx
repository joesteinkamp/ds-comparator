'use client';

import { Button as BasePrimerButton } from '@primer/react';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function PrimerButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedVariant = variantMapping.Button[variant]?.primer as any;
  const mappedSize = variantMapping.size[size]?.primer as any;

  return (
    <BasePrimerButton
      variant={mappedVariant}
      size={mappedSize}
      disabled={disabled}
      block={fullWidth}
      onClick={onClick}
    >
      {label}
    </BasePrimerButton>
  );
}
