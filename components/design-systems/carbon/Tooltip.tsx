'use client';

import { Tooltip as CarbonTooltip } from '@carbon/react';
import { Button } from '@carbon/react';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <CarbonTooltip label={content} align={placement}>
      <div>{children || <Button>Hover me</Button>}</div>
    </CarbonTooltip>
  );
}
