'use client';

import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={!!checked}
          indeterminate={indeterminate}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
        />
      }
      label={label || ''}
      disabled={disabled}
    />
  );
}
