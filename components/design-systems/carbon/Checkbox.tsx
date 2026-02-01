'use client';

import { Checkbox as CarbonCheckbox } from '@carbon/react';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <CarbonCheckbox
      id={`carbon-checkbox-${Math.random().toString(36).substr(2, 9)}`}
      labelText={label || ''}
      checked={!!checked}
      indeterminate={indeterminate}
      onChange={(e, { checked }: any) => onChange?.(checked)}
      disabled={disabled}
    />
  );
}
