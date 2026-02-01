'use client';

import { AppProvider } from '@shopify/polaris';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function PolarisIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div 
      data-ds="polaris" 
      className={`ds-isolation-polaris ${theme}`}
      style={{ background: 'transparent' }}
    >
      <AppProvider i18n={{}} theme={theme === 'dark' ? 'dark-experimental' : 'light'}>
        {children}
      </AppProvider>
    </div>
  );
}
