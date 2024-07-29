import { type MouseEvent, useState } from 'react';

type UseLogicProps = {
  isDefaultExpanded: boolean;
  onClick?: () => void;
  isDisabled: boolean;
};

export const useLogic = ({
  isDefaultExpanded,
  onClick,
  isDisabled,
}: UseLogicProps) => {
  const [isOpen, setOpen] = useState<boolean>(isDefaultExpanded);

  const handleClick = () => {
    if (isDisabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };
  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen((currentState) => !currentState);
  };

  return {
    isOpen,
    handleToggle,
    handleClick,
  };
};
