'use client';

import { ConfigProvider, theme as antdTheme } from 'antd';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function AntdIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div data-ds="antd" className={`ds-isolation-antd ${theme}`}>
      <ConfigProvider
        theme={{
          algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          cssVar: true,
          token: {
            colorPrimary: '#1677ff',
            colorInfo: '#1677ff',
            colorSuccess: '#52c41a',
            colorWarning: '#faad14',
            colorError: '#ff4d4f',
            colorTextLightSolid: '#ffffff',
            borderRadius: 6,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
}
