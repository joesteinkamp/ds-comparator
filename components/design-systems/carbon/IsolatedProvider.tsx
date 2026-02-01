'use client';

import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function CarbonIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div data-ds="carbon" className={`ds-isolation-carbon ${theme} cds--${theme}`}>
      {children}
    </div>
  );
}
