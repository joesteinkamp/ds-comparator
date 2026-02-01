'use client';

import { Divider as PolarisDivider, Text, InlineStack } from '@shopify/polaris';
import { UniversalDividerProps } from '@/lib/types/component-props';

export default function Divider({
  orientation = 'horizontal',
  label,
}: UniversalDividerProps) {
  if (label) {
    return (
      <InlineStack gap="400" blockAlign="center">
        <div style={{ flex: 1 }}>
          <PolarisDivider />
        </div>
        <Text as="span" variant="bodySm">{label}</Text>
        <div style={{ flex: 1 }}>
          <PolarisDivider />
        </div>
      </InlineStack>
    );
  }

  return <PolarisDivider borderColor="border" />;
}
