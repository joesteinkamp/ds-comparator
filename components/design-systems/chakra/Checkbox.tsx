'use client';

import { Checkbox as ChakraCheckbox } from '@/components/ui/checkbox'; // Chakra V3 snippets usage if available
// Actually assuming snippets might allow easier usage than raw composed components.
// If snippets fail (likely), I will use the composed structure manually.
// Checking file list, we don't see snippets/ui/checkbox created.
// So I will use Root/Control/Label from @chakra-ui/react

import { Checkbox as BaseCheckbox } from '@chakra-ui/react';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <BaseCheckbox.Root
      checked={indeterminate ? 'indeterminate' : checked}
      onCheckedChange={(e) => onChange?.(!!e.checked)}
      disabled={disabled}
    >
      <BaseCheckbox.HiddenInput />
      <BaseCheckbox.Control>
        <BaseCheckbox.Indicator />
      </BaseCheckbox.Control>
      {label && <BaseCheckbox.Label>{label}</BaseCheckbox.Label>}
    </BaseCheckbox.Root>
  );
}
