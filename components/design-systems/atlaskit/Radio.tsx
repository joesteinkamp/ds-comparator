'use client';

import { RadioGroup } from '@atlaskit/radio';
import { Field } from '@atlaskit/form';
import { UniversalRadioProps } from '@/lib/types/component-props';

export default function Radio({
  label,
  options,
  value,
  onChange,
  disabled,
}: UniversalRadioProps) {
  return (
    <Field name="radio" label={label || ''}>
      {() => (
        <RadioGroup
          options={options}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          isDisabled={disabled}
        />
      )}
    </Field>
  );
}
