'use client';

import {
  Textarea as ChakraTextarea,
  Field,
} from '@chakra-ui/react';
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
    <Field.Root invalid={error} disabled={disabled}>
      {label && <Field.Label>{label}</Field.Label>}
      <ChakraTextarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
      />
      {helperText && (
        error ? (
          <Field.ErrorText>{helperText}</Field.ErrorText>
        ) : (
          <Field.HelperText>{helperText}</Field.HelperText>
        )
      )}
    </Field.Root>
  );
}
