'use client';

import { Button as AntButton } from 'antd';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function AntdButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedType = variantMapping.Button[variant]?.antd as any;
  const mappedSize = variantMapping.size[size]?.antd as any;

  return (
    <AntButton
      type={mappedType}
      size={mappedSize}
      disabled={disabled}
      block={fullWidth}
      onClick={onClick}
    >
      {label}
    </AntButton>
  );
}
