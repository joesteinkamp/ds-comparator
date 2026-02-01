'use client';

import { Button as BaseMuiButton } from '@mui/material';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function MuiButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedVariant = variantMapping.Button[variant]?.mui as any;
  const mappedSize = variantMapping.size[size]?.mui as any;

  return (
    <BaseMuiButton
      variant={mappedVariant}
      size={mappedSize}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {label}
    </BaseMuiButton>
  );
}
