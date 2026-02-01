'use client';

import TextArea from '@atlaskit/textarea';
import { Field, ErrorMessage, HelperMessage } from '@atlaskit/form';
import { UniversalTextareaProps } from '@/lib/types/component-props';

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  helperText,
  rows = 4,
}: UniversalTextareaProps) {
  return (
    <Field name="textarea" label={label || ''}>
      {({ fieldProps }: any) => (
        <>
          <TextArea
            {...fieldProps}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            isDisabled={disabled}
            isInvalid={error}
            minimumRows={rows}
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
  );
}
