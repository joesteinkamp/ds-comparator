'use client';

import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function AtlaskitIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div data-ds="atlaskit" className={`ds-isolation-atlaskit ${theme}`} data-theme={theme}>
      {children}
    </div>
  );
}
