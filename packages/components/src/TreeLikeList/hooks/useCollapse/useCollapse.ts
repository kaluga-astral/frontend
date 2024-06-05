import { type MouseEvent, useState } from 'react';

export const useCollapse = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen((currentState) => !currentState);
  };

  return {
    isOpen,
    handleToggle,
  };
};
