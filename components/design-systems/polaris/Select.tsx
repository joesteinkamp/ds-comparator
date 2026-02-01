'use client';

import { Select as PolarisSelect } from '@shopify/polaris';
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
      <PolarisSelect
        label={label}
        options={options}
        onChange={(val) => onChange?.(val)}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        helpText={helperText}
      />
    </div>
  );
}
