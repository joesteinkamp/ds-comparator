'use client';

import { LegacyCard, Text } from '@shopify/polaris';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  return (
    <LegacyCard title={title} sectioned>
      {description && (
        <div style={{ marginBottom: '1rem' }}>
          <Text as="p" tone="subdued">{description}</Text>
        </div>
      )}
      {children}
      {footer && (
        <LegacyCard.Section>
          {footer}
        </LegacyCard.Section>
      )}
    </LegacyCard>
  );
}
