'use client';

import {
  Card as FluentCard,
  CardHeader,
  CardFooter,
  Text,
  makeStyles,
  shorthands,
} from '@fluentui/react-components';
import { UniversalCardProps } from '@/lib/types/component-props';

const useStyles = makeStyles({
  card: {
    height: '100%',
    width: '100%',
    maxWidth: '400px',
  },
  text: {
    ...shorthands.margin('0'),
  },
  content: {
    ...shorthands.padding('16px'),
  }
});

export default function Card({
  title,
  description,
  children,
  footer,
}: UniversalCardProps) {
  const styles = useStyles();

  return (
    <FluentCard className={styles.card}>
      {(title || description) && (
        <CardHeader
          header={
            <Text weight="semibold" size={400}>
              {title}
            </Text>
          }
          description={
            <Text size={300} className={styles.text}>
              {description}
            </Text>
          }
        />
      )}
      <div className={styles.content}>
        {children}
      </div>
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </FluentCard>
  );
}
