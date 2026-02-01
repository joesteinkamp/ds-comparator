'use client';

import { SkeletonBodyText, SkeletonDisplayText } from '@shopify/polaris';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  variant = 'text',
}: UniversalSkeletonProps) {
  if (variant === 'text') {
    return <SkeletonBodyText lines={1} />;
  }

  return <SkeletonDisplayText size="small" />;
}
