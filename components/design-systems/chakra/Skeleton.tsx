'use client';

import { Skeleton as ChakraSkeleton } from '@chakra-ui/react';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = '20px',
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  return (
    <ChakraSkeleton
      width={width}
      height={height}
      borderRadius={variant === 'circular' ? 'full' : 'md'}
    />
  );
}
