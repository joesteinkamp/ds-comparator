'use client';

import { Button as BaseShadcnButton } from '@/components/ui/button';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function ShadcnButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedVariant = variantMapping.Button[variant]?.shadcn as any;
  const mappedSize = variantMapping.size[size]?.shadcn as any;

  return (
    <BaseShadcnButton
      variant={mappedVariant}
      size={mappedSize}
      disabled={disabled}
      className={fullWidth ? 'w-full' : ''}
      onClick={onClick}
    >
      {label}
    </BaseShadcnButton>
  );
}
