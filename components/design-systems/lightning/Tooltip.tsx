'use client';

import { Tooltip as LightningTooltip, Button } from '@salesforce/design-system-react';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <LightningTooltip content={content} position={placement}>
      {children || <Button label="Hover me" />}
    </LightningTooltip>
  );
}
