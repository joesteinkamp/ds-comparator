'use client';

import { TextArea } from '@carbon/react';
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
    <TextArea
      labelText={label || ''}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      invalid={error}
      invalidText={error ? helperText : undefined}
      helperText={!error ? helperText : undefined}
      rows={rows}
      id="carbon-textarea"
    />
  );
}
