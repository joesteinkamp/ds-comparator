'use client';

import { Select as AntSelect } from 'antd';
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
    <div style={{ width: fullWidth ? '100%' : '200px' }}>
      {label && <div style={{ marginBottom: 8 }}>{label}</div>}
      <AntSelect
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        status={error ? 'error' : undefined}
        style={{ width: '100%' }}
        options={options}
      />
      {helperText && (
        <div style={{ marginTop: 5, fontSize: 12, color: error ? '#ff4d4f' : 'rgba(0, 0, 0, 0.45)' }}>
          {helperText}
        </div>
      )}
    </div>
  );
}
