'use client';

import AtlasButton from '@atlaskit/button';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function AtlaskitButton({
  label,
  variant = 'primary',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedAppearance = variantMapping.Button[variant]?.atlaskit as any;

  return (
    <AtlasButton
      appearance={mappedAppearance}
      isDisabled={disabled}
      shouldFitContainer={fullWidth}
      onClick={onClick}
    >
      {label}
    </AtlasButton>
  );
}
