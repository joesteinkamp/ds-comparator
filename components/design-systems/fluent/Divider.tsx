'use client';

import { Divider as FluentDivider } from '@fluentui/react-components';
import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  return (
    <FluentDivider
      vertical={orientation === 'vertical'}
      style={orientation === 'vertical' ? { height: 48 } : {}}
    >
      {label}
    </FluentDivider>
  );
}
