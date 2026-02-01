'use client';

import { Input as AntInput } from 'antd';
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
  
  const InputComponent = type === 'password' ? AntInput.Password : AntInput;

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && <div style={{ marginBottom: 8 }}>{label}</div>}
      <InputComponent
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        status={error ? 'error' : undefined}
      />
      {helperText && (
        <div style={{ marginTop: 5, fontSize: 12, color: error ? '#ff4d4f' : 'rgba(0, 0, 0, 0.45)' }}>
          {helperText}
        </div>
      )}
    </div>
  );
}
