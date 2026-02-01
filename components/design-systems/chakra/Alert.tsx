'use client';

import { Alert as ChakraAlert } from '@chakra-ui/react';
import { UniversalAlertProps } from '@/lib/types/component-props';

export default function Alert({
  title,
  message,
  variant = 'info',
  dismissible,
  onDismiss,
}: UniversalAlertProps) {
  const statusMap = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
  };

  return (
    <ChakraAlert.Root status={statusMap[variant] as any}>
      <ChakraAlert.Indicator />
      <ChakraAlert.Content>
        {title && <ChakraAlert.Title>{title}</ChakraAlert.Title>}
        <ChakraAlert.Description>{message}</ChakraAlert.Description>
      </ChakraAlert.Content>
    </ChakraAlert.Root>
  );
}
