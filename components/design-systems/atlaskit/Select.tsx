'use client';

import AtlasSelect from '@atlaskit/select';
import { Field, ErrorMessage, HelperMessage } from '@atlaskit/form';
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
  
  const mappedOptions = options.map(opt => ({ label: opt.label, value: opt.value }));
  const selectedOption = mappedOptions.find(opt => opt.value === value);

  return (
    <div style={{ width: fullWidth ? '100%' : '300px' }}>
      <Field name="select" label={label || ''}>
        {({ fieldProps }: any) => (
          <>
            <AtlasSelect
              {...fieldProps}
              placeholder={placeholder}
              options={mappedOptions}
              value={selectedOption}
              onChange={(opt: any) => onChange?.(opt?.value || '')}
              isDisabled={disabled}
              isInvalid={error}
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
