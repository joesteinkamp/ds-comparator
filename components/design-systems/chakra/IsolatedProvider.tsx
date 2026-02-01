'use client';

import { 
  ChakraProvider, 
  defaultConfig, 
  mergeConfigs, 
  createSystem 
} from '@chakra-ui/react';
import { useUnifiedTheme } from '@/lib/contexts/unified-theme-context';

// Create a custom system that scopes global preflight and globalCss
// to the [data-ds="chakra"] container to prevent style leakage.
const customConfig = mergeConfigs(defaultConfig, {
  preflight: false,
});

// Scope the global CSS rules to the chakra container
if (customConfig.globalCss) {
  const originalGlobalCss = customConfig.globalCss;
  const scopedGlobalCss: any = {};
  
  for (const [selector, styles] of Object.entries(originalGlobalCss)) {
    // If it's a root/global selector, map it directly to our container
    if (selector === 'html' || selector === 'body' || selector === '*') {
      scopedGlobalCss['[data-ds="chakra"]'] = {
        ...(scopedGlobalCss['[data-ds="chakra"]'] || {}),
        ...(styles as any)
      };
    } else {
      // Otherwise, nest it under our container
      scopedGlobalCss[`[data-ds="chakra"] ${selector}`] = styles;
    }
  }
  
  customConfig.globalCss = scopedGlobalCss;
}

const customSystem = createSystem(customConfig);

export function ChakraIsolatedProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUnifiedTheme();

  return (
    <div data-ds="chakra" className={`ds-isolation-chakra ${theme}`}>
      <ChakraProvider value={customSystem}>
        {children}
      </ChakraProvider>
    </div>
  );
}
