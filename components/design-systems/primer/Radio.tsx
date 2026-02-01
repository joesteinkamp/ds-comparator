'use client';

import { Radio, RadioGroup, FormControl } from '@primer/react';
import { UniversalRadioProps } from '@/lib/types/component-props';

export default function RadioComponent({
  label,
  options,
  value,
  onChange,
  disabled,
  orientation = 'vertical',
}: UniversalRadioProps) {
  return (
    <FormControl disabled={disabled}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <RadioGroup name="primer-radio" onChange={(selected) => selected !== null && onChange?.(selected)}>
        {options.map((option) => (
          <FormControl key={option.value}>
            <Radio
              value={option.value}
              checked={value === option.value}
            />
            <FormControl.Label>{option.label}</FormControl.Label>
          </FormControl>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
