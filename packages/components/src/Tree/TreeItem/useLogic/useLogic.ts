import { type MouseEvent, useState } from 'react';

import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = TreeItemProps;

export const useLogic = ({
  id,
  prefixId,
  isDefaultExpanded = false,
  isDisabled,
  disableReason,
  onClick,
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

  const idAttr = prefixId ? `${prefixId}${id}` : id;

  return {
    isOpen,
    handleToggle,
    handleClick,
    itemProps: {
      id: idAttr,
    },
    tooltipProps: {
      title: disableReason,
      withoutContainer: !isDisabled,
    },
  };
};
