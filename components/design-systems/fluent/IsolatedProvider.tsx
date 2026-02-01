'use client';

import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
} from '@fluentui/react-components';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function FluentIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div data-ds="fluent" className={`ds-isolation-fluent ${theme}`}>
      <FluentProvider theme={theme === 'dark' ? webDarkTheme : webLightTheme} style={{ background: 'transparent' }}>
        {children}
      </FluentProvider>
    </div>
  );
}
