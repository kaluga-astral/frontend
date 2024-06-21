import { type MouseEvent, useState } from 'react';

type UseLogicProps = { isDefaultExpanded: boolean };

export const useLogic = ({ isDefaultExpanded }: UseLogicProps) => {
  const [isOpen, setOpen] = useState<boolean>(isDefaultExpanded);

  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen((currentState) => !currentState);
  };

  return {
    isOpen,
    handleToggle,
  };
};
