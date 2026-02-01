'use client';

import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className="flex items-center gap-4 w-full">
        <hr className="flex-1 border-t border-gray-300" />
        <span className="text-sm text-gray-600">{label}</span>
        <hr className="flex-1 border-t border-gray-300" />
      </div>
    );
  }

  return (
    <hr
      className={
        orientation === 'vertical'
          ? 'border-l border-gray-300 h-12 inline-block'
          : 'border-t border-gray-300 w-full'
      }
    />
  );
}
