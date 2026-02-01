'use client';

import { ProgressBar } from '@shopify/polaris';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
  size = 'medium',
}: UniversalProgressProps) {
  const sizeMap = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  return (
    <div className="w-full">
      <ProgressBar
        progress={variant === 'determinate' ? value : 0}
        size={sizeMap[size] as any}
      />
    </div>
  );
}
