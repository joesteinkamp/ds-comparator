'use client';

import { ProgressBar } from '@fluentui/react-components';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
}: UniversalProgressProps) {
  return (
    <div className="w-full">
      <ProgressBar
        value={variant === 'determinate' ? value / 100 : undefined}
        thickness={variant === 'indeterminate' ? 'medium' : undefined}
      />
    </div>
  );
}
