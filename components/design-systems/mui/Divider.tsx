'use client';

import { Divider as MuiDivider } from '@mui/material';
import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  return (
    <MuiDivider
      orientation={orientation}
      sx={orientation === 'vertical' ? { height: 48 } : {}}
    >
      {label}
    </MuiDivider>
  );
}
