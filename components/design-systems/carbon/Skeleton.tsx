'use client';

import { SkeletonText, SkeletonPlaceholder } from '@carbon/react';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  if (variant === 'text') {
    return <SkeletonText width={width as string} />;
  }

  return (
    <SkeletonPlaceholder
      style={{ width, height }}
    />
  );
}
