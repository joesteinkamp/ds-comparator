'use client';

import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '8px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index > 0 && <span>/</span>}
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span style={{ fontWeight: index === items.length - 1 ? 'bold' : 'normal' }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
