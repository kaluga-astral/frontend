import { useState } from 'react';

type OpenHandler = () => void;
type CloseHandler = () => void;

type UseToggleResultTuple = [boolean, OpenHandler, CloseHandler];

type UseToggleOptions = {
  initialState?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export const useToggle = ({
  initialState = false,
  onClose,
  onOpen,
}: UseToggleOptions): UseToggleResultTuple => {
  const [isActive, setActive] = useState(initialState);

  const handleOpen = () => {
    setActive(true);
    onOpen?.();
  };

  const handleClose = () => {
    setActive(false);
    onClose?.();
  };

  return [isActive, handleOpen, handleClose];
};
