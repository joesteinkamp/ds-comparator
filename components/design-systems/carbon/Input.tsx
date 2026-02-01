'use client';

import { TextInput } from '@carbon/react';
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
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      <TextInput
        id={`carbon-input-${Math.random().toString(36).substr(2, 9)}`}
        labelText={label || ''}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        invalid={error}
        invalidText={error ? helperText : undefined}
        helperText={!error ? helperText : undefined}
        type={type === 'password' ? 'password' : 'text'}
        hideLabel={!label}
      />
    </div>
  );
}
