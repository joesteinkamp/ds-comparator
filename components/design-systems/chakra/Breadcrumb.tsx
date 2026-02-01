'use client';

import React from 'react';
import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <ChakraBreadcrumb.Root>
      <ChakraBreadcrumb.List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChakraBreadcrumb.Item>
              {index === items.length - 1 ? (
                <ChakraBreadcrumb.CurrentLink>
                  {item.label}
                </ChakraBreadcrumb.CurrentLink>
              ) : (
                <ChakraBreadcrumb.Link href={item.href || '#'}>
                  {item.label}
                </ChakraBreadcrumb.Link>
              )}
            </ChakraBreadcrumb.Item>
            {index < items.length - 1 && <ChakraBreadcrumb.Separator />}
          </React.Fragment>
        ))}
      </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
  );
}
