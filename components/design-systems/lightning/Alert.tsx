'use client';

import { Alert as LightningAlert } from '@salesforce/design-system-react';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const variantMap = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
  };

  return (
    <LightningAlert
      labels={{
        heading: title || '',
      }}
      variant={variantMap[variant]}
      dismissible={dismissible}
      onRequestClose={onDismiss}
    >
      {message}
    </LightningAlert>
  );
}
