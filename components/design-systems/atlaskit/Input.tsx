'use client';

import Textfield from '@atlaskit/textfield';
import { Field, ErrorMessage, HelperMessage } from '@atlaskit/form';
import { UniversalInputProps } from '@/lib/types/component-props';

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  helperText,
  type = 'text',
  fullWidth,
}: UniversalInputProps) {
  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      <Field name="input" label={label || ''}>
        {({ fieldProps }: any) => (
          <>
            <Textfield
              {...fieldProps}
              placeholder={placeholder}
              value={value}
              onChange={(e: any) => onChange?.(e.target.value)}
              isDisabled={disabled}
              isInvalid={error}
              type={type}
              width="100%"
            />
            {helperText && (
              error ? (
                <ErrorMessage>{helperText}</ErrorMessage>
              ) : (
                <HelperMessage>{helperText}</HelperMessage>
              )
            )}
          </>
        )}
      </Field>
    </div>
  );
}
