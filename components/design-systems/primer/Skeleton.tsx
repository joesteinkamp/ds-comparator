'use client';

import { SkeletonBox } from '@primer/react/experimental';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
}: UniversalSkeletonProps) {
  return (
    <SkeletonBox
      width={width}
      height={height}
    />
  );
}
