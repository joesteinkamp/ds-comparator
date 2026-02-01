'use client';

import { Checkbox as PrimerCheckbox, FormControl } from '@primer/react';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <FormControl disabled={disabled}>
      <PrimerCheckbox
        checked={!!checked}
        indeterminate={indeterminate}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      {label && <FormControl.Label>{label}</FormControl.Label>}
    </FormControl>
  );
}
