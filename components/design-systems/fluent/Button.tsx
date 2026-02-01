'use client';

import { Button as BaseFluentButton } from '@fluentui/react-components';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function FluentButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedAppearance = variantMapping.Button[variant]?.fluent as any;
  const mappedSize = variantMapping.size[size]?.fluent as any;

  return (
    <BaseFluentButton
      appearance={mappedAppearance}
      size={mappedSize}
      disabled={disabled}
      style={fullWidth ? { width: '100%' } : {}}
      onClick={onClick}
    >
      {label}
    </BaseFluentButton>
  );
}
