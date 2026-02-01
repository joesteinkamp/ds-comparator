'use client';

import { Checkbox as PolarisCheckbox } from '@shopify/polaris';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <PolarisCheckbox
      label={label}
      checked={indeterminate ? 'indeterminate' : checked}
      onChange={(newChecked) => onChange?.(newChecked)}
      disabled={disabled}
    />
  );
}
