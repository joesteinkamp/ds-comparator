'use client';

import { Button as BaseCarbonButton } from '@carbon/react';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function CarbonButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedKind = variantMapping.Button[variant]?.carbon as any;
  const mappedSize = variantMapping.size[size]?.carbon as any;

  return (
    <BaseCarbonButton
      kind={mappedKind}
      size={mappedSize}
      disabled={disabled}
      className={fullWidth ? 'w-full' : ''}
      onClick={onClick}
    >
      {label}
    </BaseCarbonButton>
  );
}
