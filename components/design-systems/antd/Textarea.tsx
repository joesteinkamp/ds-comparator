'use client';

import { Input } from 'antd';
import { UniversalTextareaProps } from '@/lib/types/component-props';

const { TextArea } = Input;

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
    <div className="space-y-1">
      {label && <div className="text-sm font-medium mb-1">{label}</div>}
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        status={error ? 'error' : undefined}
        rows={rows}
      />
      {helperText && (
        <div className={`text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
          {helperText}
        </div>
      )}
    </div>
  );
}
