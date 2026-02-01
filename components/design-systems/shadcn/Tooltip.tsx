'use client';

import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { UniversalTooltipProps } from '@/lib/types/component-props';
import { Button } from '@/components/ui/button';

export default function TooltipComponent({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children || <Button variant="outline">Hover me</Button>}
      </TooltipTrigger>
      <TooltipContent side={placement}>
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
