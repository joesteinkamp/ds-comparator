'use client';

import { Tooltip as MuiTooltip, Button } from '@mui/material';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <MuiTooltip title={content} placement={placement}>
      <div>{children || <Button variant="outlined">Hover me</Button>}</div>
    </MuiTooltip>
  );
}
