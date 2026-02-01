'use client';

import { Flash } from '@primer/react';
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
    error: 'danger',
    info: 'default',
  };

  return (
    <Flash variant={variantMap[variant] as any}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      {message}
    </Flash>
  );
}
