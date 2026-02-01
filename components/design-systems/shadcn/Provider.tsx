'use client';

import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';
import { useEffect } from 'react';

export function ShadcnProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  useEffect(() => {
    // shadcn uses class-based theming on the root element
    // The theme is already applied by UnifiedThemeProvider
  }, [theme]);

  return (
    <div data-ds="shadcn" className={theme}>
      {children}
    </div>
  );
}
