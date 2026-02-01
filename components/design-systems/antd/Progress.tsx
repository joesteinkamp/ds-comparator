'use client';

import { Progress as AntdProgress } from 'antd';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
  size = 'medium',
}: UniversalProgressProps) {
  const sizeMap = {
    small: 'small',
    medium: 'default',
    large: 'default',
  };

  return (
    <div className="w-full">
      <AntdProgress
        percent={variant === 'determinate' ? value : undefined}
        status={variant === 'indeterminate' ? 'active' : undefined}
        size={sizeMap[size] as any}
        showInfo={variant === 'determinate'}
      />
    </div>
  );
}
