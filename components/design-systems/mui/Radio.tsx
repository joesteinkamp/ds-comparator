'use client';

import {
  Radio as MuiRadio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
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
    <FormControl disabled={disabled}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        row={orientation === 'horizontal'}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MuiRadio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
