import {
  type MouseEvent,
  type MouseEventHandler,
  type SyntheticEvent,
  useState,
} from 'react';

import { DISABLE_ROW_ATTR } from '../constants';
import { type RowProps } from '../Row';

type UseLogicParams<TData extends Record<string, unknown>> = RowProps<TData>;

export const useLogic = <TData extends Record<string, unknown>>({
  keyId,
  row,
  level,
  activeRowId,
  options,
  isInitialExpanded = false,
  expandedLevel,
  isSelectable,
  selectedRows,
  onSelectRow,
  onRowClick,
}: UseLogicParams<TData>) => {
  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

  const [isOpen, setOpen] = useState<boolean>(isDefaultExpanded);

  const [isVisibleTooltip, setVisibleTooltip] = useState<boolean>(false);

  const { isDisabled, disabledReason } = options || {};

  const rowId = row[keyId] as string;
  const isChecked =
    isSelectable &&
    Boolean(selectedRows?.find((selectedRow) => selectedRow[keyId] === rowId));

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen((currentState) => !currentState);
  };

  const handleOpenTooltip = (event: SyntheticEvent<Element, Event>) => {
    const element = event.target as HTMLElement;
    const isDisabledCell = element.getAttribute(DISABLE_ROW_ATTR) === 'true';

    if (isDisabledCell) {
      setVisibleTooltip(true);
    }
  };

  const handleCloseTooltip = () => setVisibleTooltip(false);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!isDisabled) {
      return;
    }

    const element = event.target as HTMLElement;
    const isDisabledCell = element.getAttribute(DISABLE_ROW_ATTR) === 'true';

    if (!isDisabledCell) {
      setVisibleTooltip(false);
    }
  };

  const handleRowClick = () => {
    if (isDisabled) {
      return undefined;
    }

    onRowClick?.(row);
  };

  return {
    isOpen,
    handleToggle,
    rowProps: {
      $isHovered: Boolean(!isDisabled && onRowClick),
      $isSelected: activeRowId === rowId,
      onClick: handleRowClick,
      onMouseMove: handleMouseMove,
    },
    tooltipProps: {
      open: isVisibleTooltip,
      title: isDisabled && disabledReason,
      onOpen: handleOpenTooltip,
      onClose: handleCloseTooltip,
    },
    checkboxProps: {
      checked: isChecked,
      disabled: isDisabled,
      onChange: onSelectRow(row),
    },
    nestedChildrenProps: {
      isOpen,
    },
  };
};
