'use client';

import { Input as BaseChakraInput, Field } from '@chakra-ui/react';
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
  return (
    <Field.Root 
      width={fullWidth ? 'full' : 'auto'} 
      invalid={error} 
      disabled={disabled}
    >
      {label && <Field.Label>{label}</Field.Label>}
      <BaseChakraInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
      />
      {helperText && (
        error ? <Field.ErrorText>{helperText}</Field.ErrorText> : <Field.HelperText>{helperText}</Field.HelperText>
      )}
    </Field.Root>
  );
}
