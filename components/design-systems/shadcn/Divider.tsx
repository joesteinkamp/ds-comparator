'use client';

import { Separator } from '@/components/ui/separator';
import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className="flex items-center gap-4 w-full">
        <Separator className="flex-1" />
        <span className="text-sm text-muted-foreground">{label}</span>
        <Separator className="flex-1" />
      </div>
    );
  }

  return (
    <Separator
      orientation={orientation}
      className={orientation === 'vertical' ? 'h-12' : 'w-full'}
    />
  );
}
