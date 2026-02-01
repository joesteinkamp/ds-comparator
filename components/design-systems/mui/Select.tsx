'use client';

import { TextField, MenuItem } from '@mui/material';
import { UniversalSelectProps } from '@/lib/types/component-props';

export default function Select({
  label,
  placeholder,
  value,
  onChange,
  options,
  disabled,
  error,
  helperText,
  fullWidth,
}: UniversalSelectProps) {
  return (
    <TextField
      select
      label={label}
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      variant="outlined"
      size="medium"
      SelectProps={{
        displayEmpty: !!placeholder,
      }}
      InputLabelProps={{
        shrink: !!value || !!placeholder,
      }}
      InputProps={{
        label: label,
      }}
    >
      {placeholder && !value && (
         <MenuItem value="" disabled>
           <em>{placeholder}</em>
         </MenuItem>
      )}
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
