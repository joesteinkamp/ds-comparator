import { lazy } from 'react';
import { DesignSystem, ComponentName } from './types/design-systems';

// Lazy load providers
export const loadProvider = (system: DesignSystem) => {
  switch (system) {
    case 'shadcn':
      return lazy(() =>
        import('@/components/design-systems/shadcn/Provider').then((m) => ({
          default: m.ShadcnProvider,
        }))
      );
    case 'mui':
      return lazy(() =>
        import('@/components/design-systems/mui/IsolatedProvider').then((m) => ({
          default: m.MuiIsolatedProvider,
        }))
      );
    case 'antd':
      return lazy(() =>
        import('@/components/design-systems/antd/IsolatedProvider').then((m) => ({
          default: m.AntdIsolatedProvider,
        }))
      );
    case 'chakra':
      return lazy(() =>
        import('@/components/design-systems/chakra/IsolatedProvider').then((m) => ({
          default: m.ChakraIsolatedProvider,
        }))
      );
    case 'primer':
      return lazy(() =>
        import('@/components/design-systems/primer/IsolatedProvider').then((m) => ({
          default: m.PrimerIsolatedProvider,
        }))
      );
    case 'polaris':
      return lazy(() =>
        import('@/components/design-systems/polaris/IsolatedProvider').then((m) => ({
          default: m.PolarisIsolatedProvider,
        }))
      );
    case 'carbon':
      return lazy(() =>
        import('@/components/design-systems/carbon/IsolatedProvider').then((m) => ({
          default: m.CarbonIsolatedProvider,
        }))
      );
    case 'fluent':
      return lazy(() =>
        import('@/components/design-systems/fluent/IsolatedProvider').then((m) => ({
          default: m.FluentIsolatedProvider,
        }))
      );
    case 'lightning':
      return lazy(() =>
        import('@/components/design-systems/lightning/IsolatedProvider').then((m) => ({
          default: m.LightningIsolatedProvider,
        }))
      );
    case 'atlaskit':
      return lazy(() =>
        import('@/components/design-systems/atlaskit/IsolatedProvider').then((m) => ({
          default: m.AtlaskitIsolatedProvider,
        }))
      );
  }
};

// Lazy load component adapters
export const loadComponent = (system: DesignSystem, component: ComponentName) => {
  const path = `@/components/design-systems/${system}/${component}`;

  return lazy(() =>
    import(/* @vite-ignore */ path).then((m) => ({
      default: m[`${system.charAt(0).toUpperCase() + system.slice(1)}${component}`] || m.default,
    }))
  );
};

// Preload a design system (optional optimization)
export const preloadSystem = (system: DesignSystem) => {
  loadProvider(system);
};
