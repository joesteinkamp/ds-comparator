'use client';

import { Textarea as PrimerTextarea, FormControl } from '@primer/react';
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
    <FormControl disabled={disabled}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <PrimerTextarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        validationStatus={error ? 'error' : undefined}
      />
      {helperText && (
        error ? (
          <FormControl.Validation variant="error">
            {helperText}
          </FormControl.Validation>
        ) : (
          <FormControl.Caption>{helperText}</FormControl.Caption>
        )
      )}
    </FormControl>
  );
}
