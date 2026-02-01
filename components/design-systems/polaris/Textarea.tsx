'use client';

import { TextField } from '@shopify/polaris';
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
}: UniversalTextareaProps) {
  return (
    <TextField
      label={label || ''}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error ? helperText : undefined}
      helpText={!error ? helperText : undefined}
      multiline={rows}
      autoComplete="off"
    />
  );
}
