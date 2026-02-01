'use client';

import { Textarea as ShadcnTextarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
  fullWidth,
}: UniversalTextareaProps) {
  return (
    <div className={`space-y-2 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <Label className="text-sm font-medium leading-none">{label}</Label>
      )}
      <ShadcnTextarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        rows={rows}
        aria-invalid={error}
        className={fullWidth ? 'w-full' : ''}
      />
      {helperText && (
        <p className={`text-sm ${error ? 'text-destructive' : 'text-muted-foreground'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}
