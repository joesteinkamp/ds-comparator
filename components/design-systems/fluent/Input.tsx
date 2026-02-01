'use client';

import { Input as BaseFluentInput, Label } from '@fluentui/react-components';
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
  const inputId = `fluent-input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: fullWidth ? '100%' : 'auto' }}>
      {label && <Label htmlFor={inputId} disabled={disabled}>{label}</Label>}
      <BaseFluentInput
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={(e, data) => onChange?.(data.value)}
        disabled={disabled}
        type={type === 'password' ? 'password' : 'text'}
        style={{ width: '100%' }}
        appearance={error ? 'underline' : 'outline'} // Fluent doesn't have direct error prop on Input, usually handled by validation state or appearance
      />
      {helperText && (
        <span style={{ 
          fontSize: 12, 
          color: error ? '#d13438' : '#605e5c',
          fontFamily: '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif' 
        }}>
          {helperText}
        </span>
      )}
    </div>
  );
}
