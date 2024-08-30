import { useEffect, useRef, useState } from 'react';
import { type PopoverOrigin } from '@mui/material';

export const useLogic = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popoverShow = sessionStorage.getItem('popoverShow');

    if (!popoverShow) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('popoverShow', 'true');
  };

  return {
    ref,
    handleClose,
    popoverProps: {
      open: open,
      onClose: handleClose,
      anchorEl: ref.current,
      anchorOrigin: {
        vertical: 'bottom' as PopoverOrigin['vertical'],
        horizontal: 'center' as PopoverOrigin['horizontal'],
      },
      transformOrigin: {
        horizontal: 'center' as PopoverOrigin['horizontal'],
        vertical: 'top' as PopoverOrigin['vertical'],
      },
    },
  };
};
