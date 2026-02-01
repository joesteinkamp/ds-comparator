'use client';

import { Select as CarbonSelect, SelectItem } from '@carbon/react';
import { UniversalSelectProps } from '@/lib/types/component-props';

export default function Select({
  label,
  placeholder,
  value,
  onChange,
  options,
  disabled,
  error,
  helperText,
  fullWidth,
}: UniversalSelectProps) {
  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      <CarbonSelect
        id={`carbon-select-${Math.random().toString(36).substr(2, 9)}`}
        labelText={label || ''}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        invalid={error}
        invalidText={error ? helperText : undefined}
        helperText={!error ? helperText : undefined}
        hideLabel={!label}
      >
        <SelectItem text={placeholder || "Choose an option"} value="" disabled hidden />
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} text={option.label} />
        ))}
      </CarbonSelect>
    </div>
  );
}
