'use client';

import { Switch as FluentSwitch } from '@fluentui/react-components';
import { UniversalSwitchProps } from '@/lib/types/component-props';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <FluentSwitch
      checked={!!checked}
      onChange={(e, data) => onChange?.(data.checked)}
      disabled={disabled}
      label={label}
    />
  );
}
