'use client';

import { Progress as ChakraProgress } from '@chakra-ui/react';
import { UniversalProgressProps } from '@/lib/types/component-props';

export default function Progress({
  value = 50,
  variant = 'determinate',
  size = 'medium',
}: UniversalProgressProps) {
  const sizeMap = {
    small: 'xs',
    medium: 'sm',
    large: 'md',
  };

  return (
    <div className="w-full">
      <ChakraProgress.Root
        value={variant === 'determinate' ? value : null}
        size={sizeMap[size] as any}
      >
        <ChakraProgress.Track>
          <ChakraProgress.Range />
        </ChakraProgress.Track>
      </ChakraProgress.Root>
    </div>
  );
}
