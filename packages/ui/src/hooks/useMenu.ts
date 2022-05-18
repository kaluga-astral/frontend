import { useRef, useState } from 'react';

export function useMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleCloseMenu = () => setOpen(false);

  const handleOpenMenu = () => setOpen(true);

  return { open, anchorRef, handleCloseMenu, handleOpenMenu };
}
