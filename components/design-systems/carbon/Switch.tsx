'use client';

import { Toggle as CarbonToggle } from '@carbon/react';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <CarbonToggle
      id={`carbon-toggle-${Math.random().toString(36).substr(2, 9)}`}
      labelText={label || ''}
      toggled={!!checked}
      onToggle={(checked: boolean) => onChange?.(checked)}
      disabled={disabled}
      hideLabel={!label}
    />
  );
}
