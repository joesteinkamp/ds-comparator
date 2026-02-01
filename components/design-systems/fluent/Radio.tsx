'use client';

import { Radio as FluentRadio, RadioGroup, Label } from '@fluentui/react-components';
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
    <div>
      {label && <Label weight="semibold">{label}</Label>}
      <RadioGroup
        value={value}
        onChange={(_, data) => onChange?.(data.value)}
        disabled={disabled}
        layout={orientation}
      >
        {options.map((option) => (
          <FluentRadio
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
