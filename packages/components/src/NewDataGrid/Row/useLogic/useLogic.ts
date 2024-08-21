import {
  type MouseEvent,
  type SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DataGridContext } from '../../DataGridContext';
import type { CellValue } from '../../types';
import { DISABLE_ROW_ATTR } from '../constants';
import { type RowProps } from '../Row';

import { mergeColumnsOptions } from './utils';

type UseLogicParams<TData extends Record<string, CellValue>> = RowProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  keyId,
  columns,
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

  const { checkIsOpened, toggleOpenItems, disabledRowsData } =
    useContext(DataGridContext);

  const [isVisibleTooltip, setVisibleTooltip] = useState<boolean>(false);

  const rowId = row[keyId] as string;

  const loadingNote = disabledRowsData.find(
    (disabledRowData) => disabledRowData.key === rowId,
  )?.loadingNote;

  if (rowId === '1') {
    console.log(loadingNote);
  }

  const isBlockingRow = disabledRowsData.some(
    (disabledRow) => disabledRow.key === rowId,
  );

  const { isDisabled, disabledReason } = options || {};

  const disabled = isDisabled || isBlockingRow;

  useEffect(() => {
    if (isDefaultExpanded) {
      toggleOpenItems(rowId);
    }
  }, []);

  const isChecked =
    isSelectable &&
    Boolean(selectedRows?.find((selectedRow) => selectedRow[keyId] === rowId));

  const isOpen = checkIsOpened(rowId);

  const childrenColumns = useMemo(
    () => mergeColumnsOptions(columns, options?.childrenColumns),
    [columns, options],
  );

  const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toggleOpenItems(rowId);
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
    if (!disabled) {
      return;
    }

    const element = event.target as HTMLElement;
    const isDisabledCell = element.getAttribute(DISABLE_ROW_ATTR) === 'true';

    if (!isDisabledCell) {
      setVisibleTooltip(false);
    }
  };

  const handleRowClick = () => {
    if (disabled) {
      return undefined;
    }

    onRowClick?.(row);
  };

  return {
    isOpen,
    childrenColumns,
    rowId,
    isBlockingRow,
    handleToggle,
    rowProps: {
      $isHovered: Boolean(!disabled && onRowClick),
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
      disabled: disabled,
      onChange: onSelectRow(row),
    },
    nestedChildrenProps: {
      isOpen,
      rowId,
    },
  };
};
