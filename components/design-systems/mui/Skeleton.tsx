'use client';

import { Skeleton as MuiSkeleton } from '@mui/material';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  return (
    <MuiSkeleton
      variant={variant}
      width={width}
      height={height}
    />
  );
}
