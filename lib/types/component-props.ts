import { ComponentSize, ComponentVariant } from './design-systems';

export type UniversalButtonProps = {
  label: string;
  variant?: ComponentVariant;
  size?: ComponentSize;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

export type UniversalInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  fullWidth?: boolean;
};

export type UniversalCardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  elevation?: number;
};

export type UniversalSelectProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{ label: string; value: string }>;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
};

export type UniversalCheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
};

export type UniversalRadioProps = {
  label?: string;
  options: Array<{ label: string; value: string }>;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
};

export type UniversalSwitchProps = {
  label?: string;
  helperText?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
};

export type UniversalTextareaProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  rows?: number;
  fullWidth?: boolean;
};

export type UniversalBadgeProps = {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: ComponentSize;
};



export type UniversalTooltipProps = {
  content: string;
  children: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
};

export type UniversalProgressProps = {
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  size?: ComponentSize;
};

export type UniversalAlertProps = {
  title?: string;
  message: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
  dismissible?: boolean;
  onDismiss?: () => void;
};

export type UniversalDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

export type UniversalTabsProps = {
  tabs: Array<{ label: string; value: string; content: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
};

export type UniversalAccordionProps = {
  items: Array<{ title: string; content: React.ReactNode }>;
  multiple?: boolean;
};

export type UniversalSkeletonProps = {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
};

export type UniversalDividerProps = {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
};

export type UniversalBreadcrumbProps = {
  items: Array<{ label: string; href?: string }>;
};

export type UniversalMenuProps = {
  trigger: React.ReactNode;
  items: Array<{ label: string; onClick?: () => void; disabled?: boolean }>;
};
