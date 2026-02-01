'use client';

import { Switch as AntSwitch } from 'antd';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <AntSwitch
        checked={checked}
        onChange={(checked) => onChange?.(checked)}
        disabled={disabled}
      />
      {label && <span style={{ marginLeft: 8 }}>{label}</span>}
    </div>
  );
}
