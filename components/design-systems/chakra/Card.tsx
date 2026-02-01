'use client';

import { Card as ChakraCard, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  return (
    <ChakraCard.Root>
      {(title || description) && (
        <CardHeader>
          {title && <Heading size="md">{title}</Heading>}
          {description && <Text color="fg.muted">{description}</Text>}
        </CardHeader>
      )}
      <CardBody>
        {children}
      </CardBody>
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </ChakraCard.Root>
  );
}
