'use client';

import { Menu as MuiMenu, MenuItem, Button } from '@mui/material';
import { UniversalMenuProps } from '@/lib/types/component-props';
import { useState } from 'react';

export default function Menu({
  trigger,
  items,
}: UniversalMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (onClick?: () => void) => {
    onClick?.();
    handleClose();
  };

  return (
    <>
      <div onClick={handleClick}>
        {trigger || <Button variant="outlined">Menu</Button>}
      </div>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleItemClick(item.onClick)}
            disabled={item.disabled}
          >
            {item.label}
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
}
