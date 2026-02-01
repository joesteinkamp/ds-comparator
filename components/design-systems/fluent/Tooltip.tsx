'use client';

import { Tooltip as FluentTooltip, Button } from '@fluentui/react-components';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <FluentTooltip content={content} relationship="label" positioning={placement as any}>
      <div>{children || <Button>Hover me</Button>}</div>
    </FluentTooltip>
  );
}
