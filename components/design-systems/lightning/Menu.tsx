'use client';

import { useId, useMemo, useState } from 'react';
import { UniversalMenuProps } from '@/lib/types/component-props';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  const menuId = useId();
  const [open, setOpen] = useState(false);

  const triggerLabel = useMemo(() => {
    if (typeof trigger === 'string' || typeof trigger === 'number') {
      return String(trigger);
    }
    return 'Menu';
  }, [trigger]);

  const handleSelect = (index: number) => {
    const item = items[index];
    if (!item || item.disabled) return;
    item.onClick?.();
    setOpen(false);
  };

  return (
    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
      <button
        type="button"
        className="slds-button slds-button_neutral"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((prev) => !prev)}
      >
        {triggerLabel}
      </button>
      {open && (
        <div
          id={menuId}
          className="slds-dropdown slds-dropdown_left"
          role="menu"
        >
          <ul className="slds-dropdown__list" role="presentation">
            {items.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className="slds-dropdown__item"
                role="presentation"
              >
                <button
                  type="button"
                  className="slds-dropdown__link"
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => handleSelect(index)}
                >
                  <span className="slds-truncate" title={item.label}>
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
