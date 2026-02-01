'use client';

import { Divider as AntdDivider } from 'antd';
import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  return (
    <AntdDivider
      orientation={orientation}
      style={orientation === 'vertical' ? { height: 48 } : {}}
    >
      {label}
    </AntdDivider>
  );
}
