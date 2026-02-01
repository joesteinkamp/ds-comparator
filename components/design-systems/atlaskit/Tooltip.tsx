'use client';

import AtlaskitTooltip from '@atlaskit/tooltip';
import Button from '@atlaskit/button';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <AtlaskitTooltip content={content} position={placement}>
      {children || <Button>Hover me</Button>}
    </AtlaskitTooltip>
  );
}
