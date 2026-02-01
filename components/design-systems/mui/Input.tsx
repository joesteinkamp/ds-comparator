'use client';

import { TextField as MuiTextField } from '@mui/material';
import { UniversalInputProps } from '@/lib/types/component-props';

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  helperText,
  type = 'text',
  fullWidth,
}: UniversalInputProps) {
  return (
    <MuiTextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      error={error}
      helperText={helperText}
      type={type}
      fullWidth={fullWidth}
      variant="outlined"
      size="medium"
    />
  );
}
