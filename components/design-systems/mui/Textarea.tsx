'use client';

import { TextField } from '@mui/material';
import { UniversalTextareaProps } from '@/lib/types/component-props';

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  helperText,
  rows = 4,
  fullWidth = true,
}: UniversalTextareaProps) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      error={error}
      helperText={helperText}
      multiline
      rows={rows}
      fullWidth={fullWidth}
      variant="outlined"
    />
  );
}
