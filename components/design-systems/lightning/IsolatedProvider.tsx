'use client';

import { IconSettings } from '@salesforce/design-system-react';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

export function LightningIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();
  const iconPath = 'https://unpkg.com/@salesforce-ux/design-system@2.24.2/assets/icons';

  return (
    <div data-ds="lightning" className={`ds-isolation-lightning ${theme} slds-scope`}>
      <IconSettings iconPath={iconPath}>
        {children}
      </IconSettings>
    </div>
  );
}
