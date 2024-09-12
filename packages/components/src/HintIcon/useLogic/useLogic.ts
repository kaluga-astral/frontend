import { useState } from 'react';

import { useViewportType } from '../../hooks';

export const useLogic = () => {
  const [open, setOpen] = useState(false);

  const { isMobile } = useViewportType();
  const handleOpen = () => {
    if (isMobile) {
      setOpen((prevState) => !prevState);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose,
  };
};
