import { SyntheticEvent, useContext, useEffect, useState } from 'react';

import { BackdropStackContext, Reasons } from '../../BackdropStack';

export const useBackdropStackToggle = (id: string, cleanOnClose = false) => {
  const { pop, push, remove } = useContext(BackdropStackContext);

  const [isOpened, setOpened] = useState(false);
  const handleOpen = () => {
    push(id);
    setOpened(true);
  };

  const handleClose = (_: SyntheticEvent<Element, Event>, reason?: Reasons) => {
    setOpened(!pop(id, { reason, cleanOnPop: cleanOnClose }));
  };

  useEffect(() => () => remove(id), []);

  return { isOpened, handleOpen, handleClose };
};
