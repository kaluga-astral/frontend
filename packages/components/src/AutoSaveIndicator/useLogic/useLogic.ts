import { useEffect, useRef, useState } from 'react';

import { useLocalStorage } from '../../hooks';
import { AUTOSAVE_POPOVER } from '../constants';

export const useLogic = () => {
  const [open, setOpen] = useState(false);

  const [storageOnBoardShow, setStorageOnBoardShow] = useLocalStorage(
    AUTOSAVE_POPOVER,
    true,
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (storageOnBoardShow) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    setStorageOnBoardShow(false);
  };

  return {
    ref,
    handleClose,
    popoverProps: {
      open,
      onClose: handleClose,
      anchorEl: ref.current,
    },
  };
};
