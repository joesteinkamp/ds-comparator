'use client';

import { Skeleton as FluentSkeleton, SkeletonItem } from '@fluentui/react-components';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
}: UniversalSkeletonProps) {
  return (
    <FluentSkeleton>
      <SkeletonItem style={{ width, height }} />
    </FluentSkeleton>
  );
}
