'use client';

import { Card as AntCard } from 'antd';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  return (
    <AntCard 
      title={title}
      actions={footer ? [footer] : undefined}
    >
      {description && (
        <div style={{ marginBottom: 16, color: 'rgba(0, 0, 0, 0.45)' }}>
          {description}
        </div>
      )}
      {children}
    </AntCard>
  );
}
