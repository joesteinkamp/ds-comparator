'use client';

import { Input as BaseLightningInput } from '@salesforce/design-system-react';
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
      <BaseLightningInput
        label={label || ' '}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => onChange?.(e.target.value)}
        disabled={disabled}
        errorText={error ? helperText : undefined}
        type={type}
      />
      {!error && helperText && (
        <div className="slds-form-element__help">{helperText}</div>
      )}
    </div>
  );
}
