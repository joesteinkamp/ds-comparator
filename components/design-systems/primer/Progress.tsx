'use client';

import { ProgressBar } from '@primer/react';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
}: UniversalProgressProps) {
  return (
    <div className="w-full">
      <ProgressBar progress={variant === 'determinate' ? value : undefined} />
    </div>
  );
}
