'use client';

import { createTheme, ThemeProvider, ScopedCssBaseline } from '@mui/material';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';
import { useMemo } from 'react';

export function MuiIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#9c27b0',
          },
        },
      }),
    [theme]
  );

  return (
    <div data-ds="mui" className={`ds-isolation-mui ${theme}`}>
      <ThemeProvider theme={muiTheme}>
        <ScopedCssBaseline style={{ background: 'transparent' }}>
          {children}
        </ScopedCssBaseline>
      </ThemeProvider>
    </div>
  );
}
