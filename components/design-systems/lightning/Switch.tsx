'use client';

// Lightning doesn't export a "Switch" directly in the types we have, usually it's a Checkbox with 'toggle' variant?
// Let's check @salesforce/design-system-react possibilities.
// Often it's `createCheckbox`? No.
// I'll stick to a styled checkbox simulation if specific component missing, but let's try importing Checkbox and see if it has 'toggle' variant props.
// Actually, looking at docs, it is "Input" with type="toggle".

import { Checkbox as LightningCheckbox } from '@salesforce/design-system-react';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  // Lightning Checkbox allows `variant="toggle"`
  return (
    <LightningCheckbox
      labels={{ label: label || ' ', toggleEnabled: 'Enabled', toggleDisabled: 'Disabled' }}
      variant="toggle"
      checked={!!checked}
      onChange={(e: any) => onChange?.(e.target.checked)}
      disabled={disabled}
    />
  );
}
