'use client';

import { Checkbox as LightningCheckbox } from '@salesforce/design-system-react';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <LightningCheckbox
      labels={{ label: label || ' ' }}
      checked={!!checked}
      indeterminate={indeterminate}
      onChange={(e: any) => onChange?.(e.target.checked)}
      disabled={disabled}
    />
  );
}
