'use client';

import { useId } from 'react';
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
  const selectId = useId();
  const helpId = helperText ? `${selectId}-help` : undefined;

  return (
    <div
      className={`slds-form-element ${error ? 'slds-has-error' : ''}`}
      style={{ width: fullWidth ? '100%' : '200px' }}
    >
      {label && (
        <label className="slds-form-element__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className="slds-form-element__control">
        <div className="slds-select_container">
          <select
            id={selectId}
            className="slds-select"
            value={value ?? ''}
            disabled={disabled}
            aria-describedby={helpId}
            onChange={(event) => onChange?.(event.target.value)}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {helperText && (
        <div id={helpId} className="slds-form-element__help">
          {helperText}
        </div>
      )}
    </div>
  );
}
