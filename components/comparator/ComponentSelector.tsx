'use client';

import { ComponentName } from '@/lib/types/design-systems';
import { Toggle } from '@/components/ui/toggle';

interface ComponentSelectorProps {
  selected: ComponentName[];
  onChange: (component: ComponentName) => void;
}

const AVAILABLE_COMPONENTS: ComponentName[] = [
  'Button',
  'Input',
  'Card',
  'Select',
  'Checkbox',
  'Radio',
  'Switch',
  'Textarea',
  'Badge',
  'Tooltip',
  'Progress',
  'Skeleton',
  'Divider',
  'Alert',
  'Tabs',
  'Accordion',
  'Breadcrumb',
  'Menu',
];

export function ComponentSelector({
  selected,
  onChange,
}: ComponentSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium text-muted-foreground">
        Select components:
      </div>
      <div className="flex flex-wrap gap-2">
        {AVAILABLE_COMPONENTS.map((component) => (
          <Toggle
            key={component}
            pressed={selected.includes(component)}
            onPressedChange={() => onChange(component)}
            variant="outline"
            className="h-auto rounded-md px-3 py-1.5 text-sm font-medium hover:bg-muted data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:border-accent"
          >
            {component}
          </Toggle>
        ))}
      </div>
    </div>
  );
}
