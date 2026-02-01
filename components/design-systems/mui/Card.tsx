'use client';

import { Card as MuiCard, CardContent, CardHeader, CardActions, Typography } from '@mui/material';
import { UniversalCardProps } from '@/lib/types/component-props';

export default function Card({
  title,
  description,
  children,
  footer,
  elevation = 1,
}: UniversalCardProps) {
  return (
    <MuiCard elevation={elevation}>
      {(title || description) && (
        <CardHeader
          title={title}
          subheader={description}
        />
      )}
      <CardContent>
        {typeof children === 'string' ? (
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        ) : (
          children
        )}
      </CardContent>
      {footer && (
        <CardActions sx={{ padding: 2 }}>
          {footer}
        </CardActions>
      )}
    </MuiCard>
  );
}
