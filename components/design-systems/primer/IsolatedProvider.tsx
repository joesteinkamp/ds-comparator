'use client';

import { ThemeProvider, BaseStyles } from '@primer/react';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function PrimerIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div data-ds="primer" className={`ds-isolation-primer ${theme}`}>
      <ThemeProvider colorMode={theme}>
        <BaseStyles>
          {children}
        </BaseStyles>
      </ThemeProvider>
    </div>
  );
}
