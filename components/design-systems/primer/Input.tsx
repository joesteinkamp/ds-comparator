'use client';

import { TextInput, FormControl } from '@primer/react';
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
    <FormControl disabled={disabled} required={false}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        width={fullWidth ? '100%': undefined}
        block={fullWidth}
        validationStatus={error ? 'error' : undefined}
      />
      {helperText && (
        <FormControl.Caption>
          {helperText}
        </FormControl.Caption>
      )}
    </FormControl>
  );
}
