'use client';

import { Alert as AntdAlert } from 'antd';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const closable = dismissible
    ? { onClose: onDismiss }
    : onDismiss
      ? { onClose: onDismiss }
      : false;

  return (
    <AntdAlert
      title={title}
      description={message}
      type={variant}
      closable={closable}
      showIcon
    />
  );
}
