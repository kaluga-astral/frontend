import { type RefObject, useEffect, useState } from 'react';

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
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    },
  };
};
