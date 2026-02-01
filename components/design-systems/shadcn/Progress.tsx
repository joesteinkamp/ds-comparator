'use client';

import { Progress as ShadcnProgress } from '@/components/ui/progress';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
}: UniversalProgressProps) {
  return (
    <div className="w-full space-y-2">
      <ShadcnProgress value={variant === 'determinate' ? value : undefined} />
      {variant === 'determinate' && (
        <div className="text-xs text-muted-foreground text-right">{value}%</div>
      )}
    </div>
  );
}
