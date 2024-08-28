import {
  type KeyboardEvent,
  type MouseEvent,
  type SyntheticEvent,
  useEffect,
  useState,
} from 'react';

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

  useEffect(() => {
    setOpen(isDefaultExpanded);
  }, [isDefaultExpanded]);

  const handleClick = (event: SyntheticEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    if (event.type === 'click') {
      return onClick?.();
    }

    if (
      event.type === 'keydown' &&
      (event as KeyboardEvent<HTMLDivElement>).code === 'Enter'
    ) {
      return onClick?.();
    }
  };

  const handleToggle = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpen((currentState) => !currentState);
  };

  const idAttr = prefixId ? `${prefixId}${id}` : id;
  const tabIndex = isDisabled ? -1 : 0;

  return {
    isOpen,
    handleToggle,
    handleClick,
    itemProps: {
      id: idAttr,
    },
    itemContentProps: {
      tabIndex,
      onClick: handleClick,
      onKeyDown: handleClick,
    },
    tooltipProps: {
      title: disableReason,
      withoutContainer: !isDisabled,
    },
  };
};
