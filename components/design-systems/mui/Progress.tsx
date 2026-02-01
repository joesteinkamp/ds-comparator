'use client';

import { LinearProgress } from '@mui/material';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
}: UniversalProgressProps) {
  return (
    <div className="w-full">
      <LinearProgress
        variant={variant}
        value={value}
      />
    </div>
  );
}
