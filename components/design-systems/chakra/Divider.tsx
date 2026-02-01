'use client';

import { Separator } from '@chakra-ui/react';
import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className="flex items-center gap-4 w-full">
        <Separator flex="1" />
        <span className="text-sm">{label}</span>
        <Separator flex="1" />
      </div>
    );
  }

  return (
    <Separator
      orientation={orientation}
      height={orientation === 'vertical' ? '48px' : undefined}
    />
  );
}
