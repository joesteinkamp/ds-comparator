'use client';

import { Alert as MuiAlert, AlertTitle } from '@mui/material';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  return (
    <MuiAlert
      severity={variant}
      onClose={dismissible ? onDismiss : undefined}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </MuiAlert>
  );
}
