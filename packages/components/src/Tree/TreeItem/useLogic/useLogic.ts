import { type MouseEvent, useState } from 'react';

import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = TreeItemProps;

export const useLogic = ({
  isDefaultExpanded = false,
  onClick,
  isDisabled,
  disableReason,
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

  const tooltipProps = {
    title: disableReason,
    withoutContainer: !isDisabled,
  };

  return {
    isOpen,
    handleToggle,
    handleClick,
    tooltipProps,
  };
};
