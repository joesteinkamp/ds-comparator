'use client';

import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className="flex items-center gap-4 w-full">
        <hr className="flex-1 border-t" />
        <span className="text-sm">{label}</span>
        <hr className="flex-1 border-t" />
      </div>
    );
  }

  return (
    <hr
      className={
        orientation === 'vertical'
          ? 'border-l h-12 inline-block'
          : 'border-t w-full'
      }
    />
  );
}
