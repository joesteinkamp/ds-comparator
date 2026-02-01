'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
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
    <div className="space-y-2">
      {label && (
        <Label className="text-sm font-medium leading-none">{label}</Label>
      )}
      <RadioGroup
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        className={orientation === 'horizontal' ? 'flex flex-row gap-4' : 'grid gap-3'}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`radio-${option.value}`} />
            <Label
              htmlFor={`radio-${option.value}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
