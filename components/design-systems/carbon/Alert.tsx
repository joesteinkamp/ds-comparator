'use client';

import { InlineNotification } from '@carbon/react';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const kindMap = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
  };

  return (
    <InlineNotification
      title={title || ''}
      subtitle={message}
      kind={kindMap[variant] as any}
      lowContrast
      hideCloseButton={!dismissible}
      onClose={onDismiss}
    />
  );
}
