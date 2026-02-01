'use client';

import { Skeleton as ShadcnSkeleton } from '@/components/ui/skeleton';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  const className = variant === 'circular' ? 'rounded-full' : 'rounded-md';

  return (
    <ShadcnSkeleton
      className={className}
      style={{ width, height }}
    />
  );
}
