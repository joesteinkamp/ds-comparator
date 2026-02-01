'use client';

import { RadioButtonGroup, RadioButton } from '@carbon/react';
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
    <RadioButtonGroup
      legendText={label || ''}
      name="carbon-radio-group"
      valueSelected={value || ''}
      onChange={(selectedValue) => onChange?.(selectedValue as string)}
      orientation={orientation}
      disabled={disabled}
    >
      {options.map((option) => (
        <RadioButton
          key={option.value}
          value={option.value}
          id={`carbon-radio-${option.value}`}
          labelText={option.label}
        />
      ))}
    </RadioButtonGroup>
  );
}
