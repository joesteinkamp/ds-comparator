'use client';

import { Checkbox as ShadcnCheckbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UniversalCheckboxProps } from '@/lib/types/component-props';

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  indeterminate,
}: UniversalCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnCheckbox
        id="shadcn-checkbox"
        checked={indeterminate ? 'indeterminate' : checked}
        onCheckedChange={(c) => onChange?.(c === true)}
        disabled={disabled}
      />
      {label && (
        <Label
          htmlFor="shadcn-checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      )}
    </div>
  );
}
