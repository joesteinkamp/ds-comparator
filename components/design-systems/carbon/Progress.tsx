'use client';

import { ProgressBar } from '@carbon/react';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
  size = 'medium',
}: UniversalProgressProps) {
  const sizeMap = {
    small: 'small',
    medium: 'big',
    large: 'big',
  };

  return (
    <div className="w-full">
      <ProgressBar
        label="Progress"
        value={variant === 'determinate' ? value : undefined}
        size={sizeMap[size] as any}
        status={variant === 'indeterminate' ? 'active' : undefined}
      />
    </div>
  );
}
