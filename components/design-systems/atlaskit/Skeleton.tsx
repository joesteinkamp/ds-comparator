'use client';

import Skeleton from '@atlaskit/skeleton';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function SkeletonComponent({
  width = '100%',
  height = 20,
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  return (
    <div style={{ width, height }}>
      <Skeleton
        width={width}
        height={height}
        isShimmering
      />
    </div>
  );
}
