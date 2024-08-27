import { type RefObject, useEffect, useState } from 'react';
import { type PopoverOrigin } from '@mui/material';

type UseLogicParams = { ref: RefObject<HTMLDivElement> };

export const useLogic = ({ ref }: UseLogicParams) => {
  const [open, setOpen] = useState(false);

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
