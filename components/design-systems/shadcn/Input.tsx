'use client';

import { Input as ShadcnInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
    <div className={`grid w-full items-center gap-1.5 ${fullWidth ? 'max-w-full' : 'max-w-sm'}`}>
      {label && <Label htmlFor="shadcn-input" className={error ? 'text-destructive' : ''}>{label}</Label>}
      <ShadcnInput
        id="shadcn-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={error ? 'border-destructive focus-visible:ring-destructive' : ''}
      />
      {helperText && <p className={`text-sm ${error ? 'text-destructive' : 'text-muted-foreground'}`}>{helperText}</p>}
    </div>
  );
}
