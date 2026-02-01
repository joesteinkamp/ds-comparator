'use client';

import { RadioButton, BlockStack, Text } from '@shopify/polaris';
import { UniversalRadioProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Radio({
  label,
  options,
  value,
  onChange,
  disabled,
}: UniversalRadioProps) {
  const [selected, setSelected] = useState(value || options[0]?.value);

  const handleChange = (checked: boolean, newValue: string) => {
    if (checked) {
      setSelected(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <BlockStack gap="200">
      {label && <Text as="p" variant="bodyMd" fontWeight="medium">{label}</Text>}
      <BlockStack gap="200">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            checked={selected === option.value}
            id={`polaris-radio-${option.value}`}
            name="polaris-radio-group"
            onChange={(checked) => handleChange(checked, option.value)}
            disabled={disabled}
          />
        ))}
      </BlockStack>
    </BlockStack>
  );
}
