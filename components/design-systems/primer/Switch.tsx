'use client';

import { ToggleSwitch, FormControl } from '@primer/react'; // ToggleSwitch is Primer's Switch
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ToggleSwitch
        checked={!!checked}
        onChange={(val) => onChange?.(val)}
        disabled={disabled}
        aria-labelledby="switch-label"
      />
       {label && <span style={{ marginLeft: 8, fontSize: 14 }}>{label}</span>}
    </div>
  );
}
