'use client';

import {
  RadioGroup as ChakraRadioGroup,
  Stack,
  Field,
} from '@chakra-ui/react';
import { UniversalRadioProps } from '@/lib/types/component-props';

export default function Radio({
  label,
  options,
  value,
  onChange,
  disabled,
  orientation = 'vertical',
}: UniversalRadioProps) {
  return (
    <Field.Root disabled={disabled}>
      {label && <Field.Label>{label}</Field.Label>}
      <ChakraRadioGroup.Root value={value ?? ''} onValueChange={(details) => details.value !== null && onChange?.(details.value)}>
        <Stack direction={orientation === 'horizontal' ? 'row' : 'column'} gap={3}>
          {options.map((option) => (
            <ChakraRadioGroup.Item key={option.value} value={option.value}>
              <ChakraRadioGroup.ItemText>{option.label}</ChakraRadioGroup.ItemText>
            </ChakraRadioGroup.Item>
          ))}
        </Stack>
      </ChakraRadioGroup.Root>
    </Field.Root>
  );
}
