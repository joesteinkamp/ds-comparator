'use client';

import { Tooltip as ChakraTooltip, Button } from '@chakra-ui/react';
import { UniversalTooltipProps } from '@/lib/types/component-props';

export default function Tooltip({
  content,
  children,
  placement = 'top',
}: UniversalTooltipProps) {
  return (
    <ChakraTooltip.Root positioning={{ placement }}>
      <ChakraTooltip.Trigger asChild>
        {children || <Button>Hover me</Button>}
      </ChakraTooltip.Trigger>
      <ChakraTooltip.Content>{content}</ChakraTooltip.Content>
    </ChakraTooltip.Root>
  );
}
