'use client';

import { Tooltip as PrimerTooltip, Button } from '@primer/react';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  const directionMap: Record<string, any> = {
    top: 'n',
    bottom: 's',
    left: 'w',
    right: 'e',
  };

  return (
    <PrimerTooltip text={content} direction={directionMap[placement] || 'n'}>
      {children || <Button>Hover me</Button>}
    </PrimerTooltip>
  );
}
