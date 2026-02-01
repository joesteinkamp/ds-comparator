'use client';

import { Switch as ChakraSwitch } from '@/components/ui/switch'; // Snippets? No.

import { Switch as BaseSwitch } from '@chakra-ui/react';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <BaseSwitch.Root
      checked={checked}
      onCheckedChange={(e) => onChange?.(e.checked)}
      disabled={disabled}
    >
      <BaseSwitch.HiddenInput />
      <BaseSwitch.Control>
        <BaseSwitch.Thumb />
      </BaseSwitch.Control>
      {label && <BaseSwitch.Label>{label}</BaseSwitch.Label>}
    </BaseSwitch.Root>
  );
}
