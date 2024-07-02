import { type MouseEvent, useState } from 'react';

import { type DataGridRowProps } from '../DataGridRow';

type UseLogicParams<TData extends Record<string, unknown>> = Omit<
  DataGridRowProps<TData>,
  'children'
>;

export const useLogic = <TData extends Record<string, unknown>>({
  keyId,
  row,
  activeRowId,
  options,
  selectable,
  selectedRows,
  onSelectRow,
  onRowClick,
}: UseLogicParams<TData>) => {
  const [isVisibleTooltip, setVisibleTooltip] = useState<boolean>(false);

  const { isDisabled, disabledReason } = options || {};
  const rowId = row[keyId] as string;
  const checked =
    selectable &&
    Boolean(selectedRows?.find((selectedRow) => selectedRow[keyId] === rowId));

  const handleOpenTooltip = () => setVisibleTooltip(true);
  const handleCloseTooltip = () => setVisibleTooltip(false);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!isDisabled) {
      return;
    }

    const element = event.target as HTMLElement;
    const target = element.closest('td');

    if (target && !target.querySelector('div[inert]')) {
      setVisibleTooltip(false);
    }
  };

  const handleRowClick = (row: TData, isDisabled?: boolean) => () => {
    if (isDisabled) {
      return undefined;
    }

    onRowClick?.(row);
  };

  return {
    tableRowProps: {
      hover: Boolean(!isDisabled && onRowClick),
      selected: activeRowId === rowId,
      onClick: handleRowClick(row, isDisabled),
      onMouseMove: handleMouseMove,
    },
    tooltipProps: {
      open: isVisibleTooltip,
      title: isDisabled && disabledReason,
      onOpen: handleOpenTooltip,
      onClose: handleCloseTooltip,
    },
    checkboxProps: {
      checked,
      disabled: isDisabled,
      onChange: onSelectRow(row),
    },
  };
};
