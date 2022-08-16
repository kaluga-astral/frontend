import { useContext, useState } from 'react';

import { BackdropStackContext } from '../../BackdropStack';

type Reasons = 'escapeKeyDown' | 'backdropClick' | string;

export const useBackdropStackModalToggle = (id: string) => {
  const { push, pop, clean } = useContext(BackdropStackContext);
  const [isOpened, setOpened] = useState(false);

  const handleOpen = () => {
    push(id);
    setOpened(true);
  };

  const handleClose = (_: Event, reason: Reasons) => {
    const canBeClosed =
      reason === 'escapeKeyDown' || (reason === 'backdropClick' && pop(id));

    if (canBeClosed) {
      clean();
      setOpened(false);
    }
  };

  return { handleClose, handleOpen, isOpened };
};
