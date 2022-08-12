import { useContext, useState } from 'react';

import { BackdropStackContext } from '../../BackdropStack';

export const useBackdropStackToggle = (id: string) => {
  const { pop, push } = useContext(BackdropStackContext);

  const [isOpened, setOpened] = useState(false);
  const handleOpen = () => {
    push(id);
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(isOpened ? !pop(id) : false);
  };

  return { isOpened, handleOpen, handleClose };
};
