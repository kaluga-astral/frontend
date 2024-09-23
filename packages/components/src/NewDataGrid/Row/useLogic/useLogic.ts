import {
  type MouseEvent,
  type SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Variant } from '../../enums';
import { DataGridContext } from '../../DataGridContext';
import type { CellValue } from '../../types';
import { DISABLE_ROW_ATTR } from '../constants';
import { type RowProps } from '../Row';
import { RowContext } from '../RowContext';

import { mergeColumnsOptions } from './utils';

type UseLogicParams<TData extends Record<string, CellValue>> = RowProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  keyId,
  columns,
  row,
  nestedChildren,
  level,
  variant,
  activeRowId,
  options,
  isInitialExpanded = false,
  expandedLevel,
  isSelectable,
  selectedRows,
  onSelectRow,
  onRowClick,
}: UseLogicParams<TData>) => {
  const isDefaultExpanded =
    isInitialExpanded && level <= expandedLevel - 1 && nestedChildren?.length;

  const { checkIsOpened, toggleOpenItems } = useContext(DataGridContext);
  const { isDisabled, disabledReason } = useContext(RowContext);

  const [isVisibleTooltip, setVisibleTooltip] = useState<boolean>(false);

  const rowId = row[keyId] as string;

  const {
    isDisabled: isExternalDisabled,
    disabledReason: externalDisabledReason,
  } = options || {};

  const disabled = isDisabled || isExternalDisabled;

  const isOpen = checkIsOpened(rowId);

  useEffect(() => {
    // Проверка на isOpen необходима для infinite версии с виртуализацией, когда происходит размонтировании компонента
    if (isDefaultExpanded && !isOpen) {
      toggleOpenItems(rowId);
    }
  }, []);

  const isChecked =
    isSelectable &&
    Boolean(selectedRows?.find((selectedRow) => selectedRow[keyId] === rowId));

  const isShowConnector = Object.is(variant, Variant.Tree);

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
    isShowConnector,
    childrenColumns,
    rowId,
    disabled,
    handleToggle,
    rowProps: {
      $isHovered: Boolean(!disabled && onRowClick),
      $isSelected: activeRowId === rowId,
      onClick: handleRowClick,
      onMouseMove: handleMouseMove,
    },
    tooltipProps: {
      open: isVisibleTooltip,
      title: disabled ? externalDisabledReason || disabledReason : undefined,
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
