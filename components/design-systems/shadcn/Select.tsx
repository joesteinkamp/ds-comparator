'use client';

import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
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
    <div className={`grid w-full items-center gap-1.5 ${fullWidth ? 'max-w-full' : 'max-w-sm'}`}>
      {label && <Label className={error ? 'text-destructive' : ''}>{label}</Label>}
      <ShadcnSelect value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className={error ? 'border-destructive focus:ring-destructive' : ''}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
      {helperText && <p className={`text-sm ${error ? 'text-destructive' : 'text-muted-foreground'}`}>{helperText}</p>}
    </div>
  );
}
