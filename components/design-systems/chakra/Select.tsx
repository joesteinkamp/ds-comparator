'use client';

import { createListCollection } from "@chakra-ui/react"
// import from ui/select removed
// WAIT - Chakra v3 Select is usually composed.
// Let's check if the user has Chakra snippets installed. I don't see them in file list.
// I will use native select from Chakra v3 if available or generic.
// Actually, `Field` with native `select` element is safest for basic usage in v3 if snippets aren't guaranteed.

import { NativeSelect, Field } from '@chakra-ui/react';
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
    <Field.Root invalid={error} disabled={disabled} width={fullWidth ? 'full' : 'auto'}>
      {label && <Field.Label>{label}</Field.Label>}
      <NativeSelect.Root>
         <NativeSelect.Field value={value ?? ''} onChange={(e) => onChange?.(e.target.value)}>
           {placeholder && <option value="" disabled>{placeholder}</option>}
           {options.map(opt => (
             <option key={opt.value} value={opt.value}>{opt.label}</option>
           ))}
         </NativeSelect.Field>
          <NativeSelect.Indicator />
      </NativeSelect.Root>
      {helperText && (
        error ? <Field.ErrorText>{helperText}</Field.ErrorText> : <Field.HelperText>{helperText}</Field.HelperText>
      )}
    </Field.Root>
  );
}
