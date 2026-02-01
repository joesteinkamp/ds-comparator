'use client';

import SectionMessage, { SectionMessageAction } from '@atlaskit/section-message';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const appearanceMap = {
    success: 'confirmation',
    warning: 'warning',
    error: 'error',
    info: 'information',
  };

  return (
    <SectionMessage
      title={title}
      appearance={appearanceMap[variant] as any}
      actions={
        dismissible ? [
          <SectionMessageAction key="dismiss" onClick={onDismiss}>
            Dismiss
          </SectionMessageAction>
        ] : undefined
      }
    >
      <p>{message}</p>
    </SectionMessage>
  );
}
