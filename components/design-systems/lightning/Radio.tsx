'use client';

import { RadioGroup, Radio as LightningRadio } from '@salesforce/design-system-react';
import { UniversalRadioProps } from '@/lib/types/component-props';

export default function Radio({
  label,
  options,
  value,
  onChange,
  disabled,
}: UniversalRadioProps) {
  return (
    <RadioGroup
      labels={{ label: label || '' }}
      onChange={(event: any) => onChange?.(event.target.value)}
      disabled={disabled}
    >
      {options.map((option) => (
        <LightningRadio
          key={option.value}
          id={`lightning-radio-${option.value}`}
          labels={{ label: option.label }}
          value={option.value}
          checked={value === option.value}
          variant="base"
        />
      ))}
    </RadioGroup>
  );
}
