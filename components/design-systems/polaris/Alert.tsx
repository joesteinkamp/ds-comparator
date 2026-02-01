'use client';

import { Banner } from '@shopify/polaris';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const toneMap = {
    success: 'success',
    warning: 'warning',
    error: 'critical',
    info: 'info',
  };

  return (
    <Banner
      title={title}
      tone={toneMap[variant] as any}
      onDismiss={dismissible ? onDismiss : undefined}
    >
      {message}
    </Banner>
  );
}
