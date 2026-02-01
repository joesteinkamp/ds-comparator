'use client';

import { Checkbox as AntCheckbox } from 'antd';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <AntCheckbox
      checked={!!checked}
      indeterminate={indeterminate}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
    >
      {label}
    </AntCheckbox>
  );
}
