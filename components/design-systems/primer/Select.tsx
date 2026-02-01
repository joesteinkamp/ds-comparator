'use client';

import { Select as PrimerSelect, FormControl } from '@primer/react';
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
    <FormControl disabled={disabled} required={false}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <PrimerSelect
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        block={fullWidth}
        validationStatus={error ? 'error' : undefined}
      >
        {placeholder && <PrimerSelect.Option value="" disabled>{placeholder}</PrimerSelect.Option>}
        {options.map((option) => (
          <PrimerSelect.Option key={option.value} value={option.value}>
            {option.label}
          </PrimerSelect.Option>
        ))}
      </PrimerSelect>
      {helperText && (
        <FormControl.Caption>
          {helperText}
        </FormControl.Caption>
      )}
    </FormControl>
  );
}
