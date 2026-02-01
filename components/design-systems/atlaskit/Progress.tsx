'use client';

import ProgressBar from '@atlaskit/progress-bar';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
}: UniversalProgressProps) {
  return (
    <div className="w-full">
      <ProgressBar
        value={variant === 'determinate' ? value / 100 : undefined}
        isIndeterminate={variant === 'indeterminate'}
      />
    </div>
  );
}
