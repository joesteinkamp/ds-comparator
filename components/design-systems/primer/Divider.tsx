'use client';

import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  if (label && orientation === 'horizontal') {
    return (
      <div className="flex items-center gap-4 w-full">
        <div style={{ flex: 1, borderTop: '1px solid var(--borderColor-default, #d1d9e0)' }} />
        <span className="text-sm">{label}</span>
        <div style={{ flex: 1, borderTop: '1px solid var(--borderColor-default, #d1d9e0)' }} />
      </div>
    );
  }

  return (
    <div
      style={{
        borderTop: orientation === 'horizontal' ? '1px solid var(--borderColor-default, #d1d9e0)' : 'none',
        borderLeft: orientation === 'vertical' ? '1px solid var(--borderColor-default, #d1d9e0)' : 'none',
        height: orientation === 'vertical' ? '48px' : 'auto',
        width: orientation === 'vertical' ? 'auto' : '100%',
      }}
    />
  );
}
