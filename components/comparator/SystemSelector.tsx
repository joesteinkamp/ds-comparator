'use client';

import { DesignSystem } from '@/lib/types/design-systems';
import { DESIGN_SYSTEMS } from '@/config/design-systems.config';
import { Toggle } from '@/components/ui/toggle';

interface SystemSelectorProps {
  selected: DesignSystem[];
  onChange: (selected: DesignSystem[]) => void;
}

export function SystemSelector({
  selected,
  onChange,
}: SystemSelectorProps) {
  const handleToggle = (system: DesignSystem) => {
    if (selected.includes(system)) {
      onChange(selected.filter((s) => s !== system));
    } else {
      onChange([...selected, system]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium text-muted-foreground">
        Select design systems:
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.values(DESIGN_SYSTEMS).map((ds) => (
          <Toggle
            key={ds.id}
            pressed={selected.includes(ds.id)}
            onPressedChange={() => handleToggle(ds.id)}
            variant="outline"
            className="h-auto gap-2 rounded-full px-4 py-2 hover:bg-muted data-[state=on]:bg-accent data-[state=on]:text-accent-foreground data-[state=on]:border-accent"
          >
            <span
              className="h-3 w-3 rounded-full shrink-0 border border-black/10 dark:border-white/20"
              style={{ backgroundColor: ds.primaryColor }}
            />
            <span className="text-sm font-medium">{ds.name}</span>
          </Toggle>
        ))}
      </div>
    </div>
  );
}
