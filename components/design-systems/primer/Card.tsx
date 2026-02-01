'use client';

import { Heading, Text } from '@primer/react';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  return (
    <div className="text-sm text-muted-foreground italic border border-dashed border-border p-2 rounded text-center">
      Card not available in Primer
    </div>
  );
}
