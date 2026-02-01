'use client';

import { TextField } from '@shopify/polaris';
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
  const id = `polaris-input-${label?.replace(/\s+/g, '-').toLowerCase() || Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={(val) => onChange?.(val)}
        disabled={disabled}
        error={error && helperText ? helperText : error}
        helpText={!error ? helperText : undefined}
        type={type === 'password' ? 'password' : 'text'}
        autoComplete="off"
      />
    </div>
  );
}
