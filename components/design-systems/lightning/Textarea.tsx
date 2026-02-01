'use client';

import { Textarea as LightningTextarea } from '@salesforce/design-system-react';
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
  const assistiveText = !label && helperText ? { label: helperText } : undefined;

  return (
    <LightningTextarea
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(event: any) => onChange?.(event.target.value)}
      disabled={disabled}
      errorText={error ? helperText : undefined}
      assistiveText={!error ? assistiveText : undefined}
      rows={rows}
      id="lightning-textarea"
    />
  );
}
