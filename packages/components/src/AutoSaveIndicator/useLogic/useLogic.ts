import { useEffect, useRef, useState } from 'react';

import { useLocalStorage } from '../../hooks';
import { IS_POPOVER_SHOW } from '../constants';

export const useLogic = () => {
  const [open, setOpen] = useState(false);

  const [storageIsPopoverShow, setStorageIsPopoverShow] = useLocalStorage(
    IS_POPOVER_SHOW,
    true,
  );

  console.log(storageIsPopoverShow);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (storageIsPopoverShow) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    setStorageIsPopoverShow(false);
  };

  return {
    ref,
    handleClose,
    popoverProps: {
      open: open,
      onClose: handleClose,
      anchorEl: ref.current,
    },
  };
};
