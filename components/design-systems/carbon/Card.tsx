'use client';

import { Tile } from '@carbon/react';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  return (
    <Tile>
      {title && <h4 className="cds--tile-heading" style={{ marginBottom: 4 }}>{title}</h4>}
      {description && <p className="cds--tile-text" style={{ marginBottom: 16, color: '#525252' }}>{description}</p>}
      <div style={{ marginBottom: footer ? 16 : 0 }}>
        {children}
      </div>
      {footer && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #e0e0e0' }}>
          {footer}
        </div>
      )}
    </Tile>
  );
}
