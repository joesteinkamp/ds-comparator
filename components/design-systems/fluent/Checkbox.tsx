'use client';

import { Checkbox as FluentCheckbox } from '@fluentui/react-components';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <FluentCheckbox
      checked={indeterminate ? 'mixed' : checked}
      onChange={(e, data) => onChange?.(data.checked === true)} // data.checked can be 'mixed'
      disabled={disabled}
      label={label}
    />
  );
}
