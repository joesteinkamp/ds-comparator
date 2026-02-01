'use client';

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { UniversalAlertProps } from '@/lib/types/component-props';
import { X } from 'lucide-react';

export default function AlertComponent({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const variantMap = {
    success: 'default',
    warning: 'default',
    error: 'destructive',
    info: 'default',
  };

  return (
    <Alert variant={variantMap[variant] as any}>
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{message}</AlertDescription>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="absolute right-2 top-2 rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </Alert>
  );
}
