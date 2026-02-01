'use client';

import { Checkbox as AtlasCheckbox } from '@atlaskit/checkbox';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <AtlasCheckbox
      label={label}
      isChecked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      isDisabled={disabled}
      isIndeterminate={indeterminate}
    />
  );
}
