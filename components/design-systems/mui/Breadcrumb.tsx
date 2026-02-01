'use client';

import { Breadcrumbs, Link, Typography } from '@mui/material';
import { UniversalBreadcrumbProps } from '@/lib/types/component-props';

export default function Breadcrumb({
  items,
}: UniversalBreadcrumbProps) {
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        index === items.length - 1 ? (
          <Typography key={index} color="text.primary">
            {item.label}
          </Typography>
        ) : (
          <Link key={index} href={item.href || '#'} underline="hover" color="inherit">
            {item.label}
          </Link>
        )
      ))}
    </Breadcrumbs>
  );
}
