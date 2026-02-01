'use client';

import { Select as FluentSelect, Label, useId } from '@fluentui/react-components';
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
  const selectId = useId('fluent-select');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: fullWidth ? '100%' : 'auto' }}>
      {label && <Label htmlFor={selectId} disabled={disabled}>{label}</Label>}
      <FluentSelect
        id={selectId}
        value={value} // Note: Fluent Select 'value' prop is controlled value, but we might need checked? No, value is fine.
        // Actually Fluent Select is complex, controlled via selectedOptions
        // Simpler for this demo:
        onChange={(e, data) => onChange?.(data.value)}
        disabled={disabled}
        style={{ width: '100%', minWidth: 200 }}
        appearance={error ? 'underline' : 'outline'}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FluentSelect>
      {helperText && (
        <span style={{ 
          fontSize: 12, 
          color: error ? '#d13438' : '#605e5c',
        }}>
          {helperText}
        </span>
      )}
    </div>
  );
}
