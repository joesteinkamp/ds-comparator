'use client';

import { Skeleton as AntdSkeleton } from 'antd';
import { UniversalSkeletonProps } from '@/lib/types/component-props';

export default function Skeleton({
  width = '100%',
  height = 20,
  variant = 'rectangular',
}: UniversalSkeletonProps) {
  if (variant === 'circular') {
    return <AntdSkeleton.Avatar active size="large" />;
  }

  return (
    <div style={{ width }}>
      <AntdSkeleton.Input active style={{ width, height }} />
    </div>
  );
}
