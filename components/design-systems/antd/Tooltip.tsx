'use client';

import { Tooltip as AntdTooltip, Button } from 'antd';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <AntdTooltip title={content} placement={placement}>
      {children || <Button>Hover me</Button>}
    </AntdTooltip>
  );
}
