'use client';

import { Textarea as FluentTextarea, Label, Field } from '@fluentui/react-components';
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
    <Field
      label={label}
      validationState={error ? 'error' : undefined}
      validationMessage={helperText}
    >
      <FluentTextarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        rows={rows}
      />
    </Field>
  );
}
