'use client';

import { Button as BaseChakraButton } from '@chakra-ui/react';
import { UniversalButtonProps } from '@/lib/types/component-props';
import { variantMapping } from '@/lib/component-map';

export default function ChakraButton({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  onClick,
}: UniversalButtonProps) {
  const mappedVariant = variantMapping.Button[variant]?.chakra as any;
  const mappedSize = variantMapping.size[size]?.chakra as any;
  const palette = variant === 'destructive' ? 'red' : 'teal';
  const isSolid = mappedVariant === 'solid';
  const solidBg = isSolid ? `${palette}.600` : undefined;
  const solidHoverBg = isSolid ? `${palette}.700` : undefined;

  return (
    <BaseChakraButton
      variant={mappedVariant}
      size={mappedSize}
      disabled={disabled}
      width={fullWidth ? 'full' : undefined}
      onClick={onClick}
      colorPalette={palette}
      color={isSolid ? 'white' : undefined}
      bg={solidBg}
      _hover={isSolid ? { bg: solidHoverBg } : undefined}
    >
      {label}
    </BaseChakraButton>
  );
}
