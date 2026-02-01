'use client';

import { ProgressBar } from '@salesforce/design-system-react';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
}: UniversalProgressProps) {
  return (
    <div className="w-full">
      <ProgressBar
        value={variant === 'determinate' ? value : undefined}
        id="lightning-progress"
      />
    </div>
  );
}
