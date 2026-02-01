'use client';

import { MessageBar, MessageBarTitle, MessageBarBody, MessageBarActions, Button } from '@fluentui/react-components';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const intentMap = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
  };

  return (
    <MessageBar intent={intentMap[variant] as any}>
      <MessageBarBody>
        {title && <MessageBarTitle>{title}</MessageBarTitle>}
        {message}
      </MessageBarBody>
      {dismissible && (
        <MessageBarActions
          containerAction={
            <Button
              onClick={onDismiss}
              appearance="transparent"
              icon={<span>×</span>}
              aria-label="dismiss"
            />
          }
        />
      )}
    </MessageBar>
  );
}
