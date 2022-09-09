import { useState } from 'react';

type OpenHandler = () => void;
type CloseHandler = () => void;

type UseToggleResultTuple = [boolean, OpenHandler, CloseHandler];

export const useToggle = (initialState = false): UseToggleResultTuple => {
  const [isActive, setActive] = useState(initialState);

  const handleOpen = () => setActive(true);

  const handleClose = () => setActive(false);

  return [isActive, handleOpen, handleClose];
};
