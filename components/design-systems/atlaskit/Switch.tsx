'use client';

import { UniversalSwitchProps } from '@/lib/types/component-props';
import { token } from '@atlaskit/tokens';

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
}: UniversalSwitchProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <label style={{ 
        position: 'relative', 
        display: 'inline-block', 
        width: '32px', 
        height: '18px',
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}>
        <input 
          type="checkbox" 
          checked={!!checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: checked ? token('color.background.selected.bold', '#0052CC') : token('color.background.neutral.bold', '#42526E'),
          transition: '0.2s',
          borderRadius: '20px'
        }}>
          <span style={{
            position: 'absolute',
            content: '""',
            height: '14px',
            width: '14px',
            left: checked ? '16px' : '2px',
            bottom: '2px',
            backgroundColor: 'white',
            transition: '0.2s',
            borderRadius: '50%'
          }} />
        </span>
      </label>
      {label && <span style={{ fontSize: '14px', color: token('color.text', '#172B4D') }}>{label}</span>}
    </div>
  );
}
