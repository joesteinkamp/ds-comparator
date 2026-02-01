'use client';

import { Switch as ShadcnSwitch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <ShadcnSwitch
        id="shadcn-switch"
        checked={checked}
        onCheckedChange={(c) => onChange?.(c)}
        disabled={disabled}
      />
      {label && <Label htmlFor="shadcn-switch">{label}</Label>}
    </div>
  );
}
