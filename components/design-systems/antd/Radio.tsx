'use client';

import { Radio as AntdRadio } from 'antd';
import { UniversalRadioProps } from '@/lib/types/component-props';

export default function Radio({
  label,
  options,
  value,
  onChange,
  disabled,
  orientation = 'vertical',
}: UniversalRadioProps) {
  return (
    <div className="space-y-2">
      {label && <div className="text-sm font-medium mb-2">{label}</div>}
      <AntdRadio.Group
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      >
        <div className={orientation === 'horizontal' ? 'flex gap-4' : 'flex flex-col gap-2'}>
          {options.map((option) => (
            <AntdRadio key={option.value} value={option.value}>
              {option.label}
            </AntdRadio>
          ))}
        </div>
      </AntdRadio.Group>
    </div>
  );
}
