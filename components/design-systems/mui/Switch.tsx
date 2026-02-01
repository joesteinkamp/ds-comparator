'use client';

import { Switch as MuiSwitch, FormControlLabel } from '@mui/material';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          checked={!!checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
        />
      }
      label={label || ''}
      disabled={disabled}
    />
  );
}
