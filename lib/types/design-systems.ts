export type DesignSystem =
  | 'shadcn'
  | 'mui'
  | 'antd'
  | 'chakra'
  | 'primer'
  | 'polaris'
  | 'carbon'
  | 'fluent'
  | 'lightning'
  | 'atlaskit';

export type ComponentName =
  | 'Button'
  | 'Input'
  | 'Card'
  | 'Select'
  | 'Checkbox'
  | 'Radio'
  | 'Switch'
  | 'Textarea'
  | 'Badge'

  | 'Tooltip'
  | 'Progress'
  | 'Skeleton'
  | 'Alert'
  | 'Dialog'
  | 'Toast'
  | 'Tabs'
  | 'Breadcrumb'
  | 'Menu'
  | 'Divider'
  | 'Accordion'
  | 'Drawer';

export type DesignSystemMetadata = {
  id: DesignSystem;
  name: string;
  description: string;
  primaryColor: string;
  website: string;
  npmPackage: string;
  version?: string;
};

export type Theme = 'light' | 'dark';

export type ComponentVariant =
  | 'primary'
  | 'secondary'
  | 'outlined'
  | 'text'
  | 'destructive'
  | 'ghost'
  | 'link';

export type ComponentSize = 'small' | 'medium' | 'large';

export type ComponentCategory =
  | 'forms'
  | 'display'
  | 'navigation'
  | 'feedback'
  | 'layout';
