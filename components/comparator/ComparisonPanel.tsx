'use client';

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { DesignSystem, ComponentName } from '@/lib/types/design-systems';
import { DESIGN_SYSTEMS } from '@/config/design-systems.config';
import { UniversalButtonProps } from '@/lib/types/component-props';

interface ComparisonPanelProps {
  system: DesignSystem;
  components: ComponentName[];
}

// Loading fallback
function ComponentSkeleton() {
  return <div className="loading-skeleton" />;
}

// Demo props for each component type
const getDemoProps = (component: ComponentName): any => {
  switch (component) {
    case 'Button':
      return {
        label: 'Button',
        variant: 'primary',
        onClick: () => console.log('Button clicked'),
      } as any;
    case 'Input':
      return {
        label: 'Enter text',
        placeholder: 'Type something...',
        helperText: 'Helper text',
        type: 'text',
        fullWidth: true,
        onChange: (val: string) => console.log('Input:', val),
      } as any;
    case 'Card':
      return {
        title: 'Card Title',
        description: 'This is a description provided to the card component.',
        children: 'This is the main content of the card. It can contain any other components.',
        footer: 'Card Footer',
        elevation: 1,
      } as any;
    case 'Select':
      return {
        label: 'Choose an option',
        placeholder: 'Select...',
        options: [
          { label: 'Option 1', value: 'opt1' },
          { label: 'Option 2', value: 'opt2' },
          { label: 'Option 3', value: 'opt3' },
        ],
        onChange: (val: string) => console.log('Select:', val),
        fullWidth: true,
      } as any;
    case 'Checkbox':
      return {
        label: 'Accept terms and conditions',
        checked: true,
        onChange: (checked: boolean) => console.log('Checkbox:', checked),
      } as any;
    case 'Switch':
      return {
        label: 'Enable feature',
        helperText: 'Ensure all criteria are met before enabling',
        checked: false,
        onChange: (checked: boolean) => console.log('Switch:', checked),
      } as any;
    case 'Radio':
      return {
        label: 'Select an option',
        options: [
          { label: 'Option 1', value: 'opt1' },
          { label: 'Option 2', value: 'opt2' },
          { label: 'Option 3', value: 'opt3' },
        ],
        value: 'opt1',
        onChange: (val: string) => console.log('Radio:', val),
      } as any;
    case 'Textarea':
      return {
        label: 'Enter your message',
        placeholder: 'Type your message here...',
        helperText: 'Maximum 500 characters',
        rows: 4,
        fullWidth: true,
        value: '',
        onChange: (val: string) => console.log('Textarea:', val),
      } as any;
    case 'Badge':
      return {
        label: 'Status',
        variant: 'default',
        size: 'medium',
      } as any;
    case 'Tooltip':
      return {
        content: 'This is a helpful tooltip',
        placement: 'top',
      } as any;
    case 'Progress':
      return {
        value: 65,
        variant: 'determinate',
        size: 'medium',
      } as any;
    case 'Skeleton':
      return {
        width: '100%',
        height: 40,
        variant: 'rectangular',
      } as any;
    case 'Divider':
      return {
        orientation: 'horizontal',
        label: 'Section',
      } as any;
    case 'Alert':
      return {
        title: 'Important Notice',
        message: 'This is an informational alert message.',
        variant: 'info',
        dismissible: true,
        onDismiss: () => console.log('Alert dismissed'),
      } as any;
    case 'Tabs':
      return {
        tabs: [
          { label: 'Tab 1', value: 'tab1', content: 'Content for tab 1' },
          { label: 'Tab 2', value: 'tab2', content: 'Content for tab 2' },
          { label: 'Tab 3', value: 'tab3', content: 'Content for tab 3' },
        ],
        value: 'tab1',
        onChange: (val: string) => console.log('Tab changed:', val),
      } as any;
    case 'Accordion':
      return {
        items: [
          { title: 'Section 1', content: 'Content for section 1' },
          { title: 'Section 2', content: 'Content for section 2' },
          { title: 'Section 3', content: 'Content for section 3' },
        ],
        multiple: false,
      } as any;
    case 'Breadcrumb':
      return {
        items: [
          { label: 'Home', href: '#' },
          { label: 'Products', href: '#' },
          { label: 'Category', href: '#' },
          { label: 'Current Page' },
        ],
      } as any;
    case 'Menu':
      return {
        items: [
          { label: 'Profile', onClick: () => console.log('Profile clicked') },
          { label: 'Settings', onClick: () => console.log('Settings clicked') },
          { label: 'Logout', onClick: () => console.log('Logout clicked') },
        ],
      } as any;

    default:
      return {};
  }
};

// Cache for lazy-loaded components and providers
const componentCache: Record<string, React.LazyExoticComponent<any>> = {};
const providerCache: Record<string, React.LazyExoticComponent<any>> = {};

const getLazyComponent = (system: DesignSystem, component: ComponentName) => {
  const key = `${system}-${component}`;
  if (!componentCache[key]) {
    componentCache[key] = lazy(() =>
      import(`@/components/design-systems/${system}/${component}`)
    );
  }
  return componentCache[key];
};

const getLazyProvider = (system: DesignSystem) => {
  if (!providerCache[system]) {
    providerCache[system] = lazy(() => {
      const wrap = (m: any, defaultExport: string) => ({
        default: ({ children }: { children: React.ReactNode }) =>
          React.createElement(m[defaultExport], {}, children),
      });

      switch (system) {
        case 'shadcn':
          return import('@/components/design-systems/shadcn/Provider').then(
            (m) => wrap(m, 'ShadcnProvider')
          );
        case 'mui':
          return import('@/components/design-systems/mui/IsolatedProvider').then(
            (m) => wrap(m, 'MuiIsolatedProvider')
          );
        case 'antd':
          return import('@/components/design-systems/antd/IsolatedProvider').then(
            (m) => wrap(m, 'AntdIsolatedProvider')
          );
        case 'chakra':
          return import(
            '@/components/design-systems/chakra/IsolatedProvider'
          ).then((m) => wrap(m, 'ChakraIsolatedProvider'));
        case 'primer':
          return import(
            '@/components/design-systems/primer/IsolatedProvider'
          ).then((m) => wrap(m, 'PrimerIsolatedProvider'));
        case 'polaris':
          return import(
            '@/components/design-systems/polaris/IsolatedProvider'
          ).then((m) => wrap(m, 'PolarisIsolatedProvider'));
        case 'carbon':
          return import(
            '@/components/design-systems/carbon/IsolatedProvider'
          ).then((m) => wrap(m, 'CarbonIsolatedProvider'));
        case 'fluent':
          return import(
            '@/components/design-systems/fluent/IsolatedProvider'
          ).then((m) => wrap(m, 'FluentIsolatedProvider'));
        case 'lightning':
          return import(
            '@/components/design-systems/lightning/IsolatedProvider'
          ).then((m) => wrap(m, 'LightningIsolatedProvider'));
        case 'atlaskit':
          return import(
            '@/components/design-systems/atlaskit/IsolatedProvider'
          ).then((m) => wrap(m, 'AtlaskitIsolatedProvider'));
        default:
          return Promise.resolve({
            default: ({ children }: { children: React.ReactNode }) => (
              <>{children}</>
            ),
          });
      }
    });
  }
  return providerCache[system];
};

// Separate component purely for lazy loading one item
function SingleComponentDemo({
  system,
  component,
  index,
}: {
  system: DesignSystem;
  component: ComponentName;
  index: number;
}) {
  const Component = getLazyComponent(system, component);
  const demoProps = getDemoProps(component);
  
  // Local state for interactive components
  const [value, setValue] = useState(demoProps.value || '');
  const [checked, setChecked] = useState(demoProps.checked || false);

  // Sync state if demoProps change (e.g. when switching components)
  useEffect(() => {
    if (demoProps.value !== undefined) setValue(demoProps.value);
    if (demoProps.checked !== undefined) setChecked(demoProps.checked);
  }, [demoProps.value, demoProps.checked]);

  const interactiveProps = {
    ...demoProps,
    ...(demoProps.value !== undefined ? { value, onChange: (val: any) => {
      // Handle both direct value and event objects
      const finalVal = val?.target ? val.target.value : val;
      setValue(finalVal);
      demoProps.onChange?.(finalVal);
    }} : {}),
    ...(demoProps.checked !== undefined ? { checked, onChange: (val: any) => {
      // Handle both direct boolean and event objects
      const finalChecked = val?.target ? val.target.checked : val;
      setChecked(finalChecked);
      demoProps.onChange?.(finalChecked);
    }} : {}),
  };

  return (
    <div className={`py-4 ${index > 0 ? 'border-t border-border/40' : ''}`}>
      <div className="text-xs font-medium text-muted-foreground mb-3 px-1">
        {component}
      </div>
      <Suspense fallback={<ComponentSkeleton />}>
        <Component {...interactiveProps} />
      </Suspense>
    </div>
  );
}

export function ComparisonPanel({ system, components }: ComparisonPanelProps) {
  const systemMetadata = DESIGN_SYSTEMS[system];
  const Provider = getLazyProvider(system);

  return (
    <div className="comparison-panel">
      <div className="comparison-panel-header">
        <div className="comparison-panel-title">
          <span
            className="comparison-panel-badge"
            style={{ backgroundColor: systemMetadata.primaryColor }}
          />
          <span>{systemMetadata.name}</span>
        </div>
        <a
          href={systemMetadata.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary"
        >
          Docs →
        </a>
      </div>

      <div className="comparison-panel-content">
        <Suspense fallback={<ComponentSkeleton />}>
          {(() => {
            const TypedProvider = Provider as any;
            return (
              <TypedProvider>
                <div className="flex flex-col">
                  {components.map((component, index) => (
                    <SingleComponentDemo
                      key={`${system}-${component}`}
                      system={system}
                      component={component}
                      index={index}
                    />
                  ))}
                </div>
              </TypedProvider>
            );
          })()}
        </Suspense>

        <div className="text-xs text-muted-foreground mt-4 pt-2 border-t border-border/40">
          Package: <code>{systemMetadata.npmPackage}</code>
        </div>
      </div>
    </div>
  );
}
