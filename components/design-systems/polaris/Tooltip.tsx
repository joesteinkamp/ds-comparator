'use client';

import { Tooltip as PolarisTooltip, Button } from '@shopify/polaris';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <PolarisTooltip content={content} preferredPosition={placement === 'top' ? 'above' : 'below'}>
      {children || <Button>Hover me</Button>}
    </PolarisTooltip>
  );
}
