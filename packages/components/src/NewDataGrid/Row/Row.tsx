import { type ChangeEvent, type ReactNode, useCallback } from 'react';

import { Checkbox } from '../../Checkbox';
import { Tooltip } from '../../Tooltip';
import type { DataGridColumns, DataGridRowOptions } from '../types';

import { checkIsDisabled } from './utils';
import { useLogic } from './useLogic';
import { DISABLE_ROW_ATTR } from './constants';
import { NestedChildren } from './NestedChildren';
import {
  CellStyled,
  CheckboxCell,
  ChevronIcon,
  CollapseButton,
  CollapseCell,
  Wrapper,
} from './styles';

export type RowProps<TData extends Record<string, unknown>> = {
  /**
   * Поле, которое будет использоваться в качестве ключа
   */
  keyId: keyof TData;

  /**
   * Данные строки для отображения
   */
  row: TData;

  /**
   * Конфигурация колонок для таблицы
   */
  columns: DataGridColumns<TData>[];

  /**
   * Конфигурация ширины колонок
   */
  gridColumns: string;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Вложенные элементы
   */
  nestedChildren: Array<TData & { options?: DataGridRowOptions }>;

  /**
   * Идентификатор активного элемента массива rows. Выделяет активную строку в таблице
   */
  activeRowId?: string;

  /**
   * Если true, то дерево будет раскрыто по умолчанию
   */
  isInitialExpanded: boolean;

  /**
   * Уровень раскрытия дерева по умолчанию, при isInitialExpanded=true
   */
  expandedLevel: number;

  /**
   * Количество отображаемых по умолчанию дочерних элементов
   */
  initialOpenedNestedChildrenCount: number;

  /**
   * Если true, то будет отображаться чекбокс для выбора элемента
   */
  isSelectable?: boolean;

  /**
   * Массив выбранных строк
   */
  selectedRows?: Array<TData>;

  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   * @default '-'
   */
  emptyCellValue?: ReactNode;

  /**
   * Дополнительные настройки строки
   */
  options?: DataGridRowOptions;

  /**
   * Обработчик выбора строки
   */
  onSelectRow: (row: TData) => (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: TData) => void;
};

export const Row = <TData extends Record<string, unknown>>(
  props: RowProps<TData>,
) => {
  const {
    isOpen,
    handleToggle,
    checkboxProps,
    rowProps,
    tooltipProps,
    nestedChildrenProps,
  } = useLogic(props);

  const {
    row,
    options,
    isSelectable,
    gridColumns,
    isInitialExpanded,
    expandedLevel,
    level,
    nestedChildren,
    initialOpenedNestedChildrenCount,
    columns,
    emptyCellValue,
    selectedRows,
    activeRowId,
    keyId,
    onSelectRow,
    onRowClick,
  } = props;

  const { isDisabled, isDisabledLastCell = true } = options || {};

  const startAdornmentRender = () => {
    if (!nestedChildren?.length && !isSelectable) {
      return null;
    }

    return (
      <>
        {nestedChildren?.length && (
          <CollapseCell>
            <CollapseButton variant="text" onClick={handleToggle}>
              <ChevronIcon $isActive={isOpen} />
            </CollapseButton>
          </CollapseCell>
        )}

        {isSelectable && (
          <CheckboxCell
            {...{ inert: isDisabled ? '' : undefined }}
            onClick={(event) => event.stopPropagation()}
          >
            <Checkbox {...checkboxProps} />
          </CheckboxCell>
        )}
      </>
    );
  };

  const rowId = (row as TData)[keyId] as string;

  const renderCells = useCallback(() => {
    const availableCellsByIndex = !isDisabledLastCell
      ? [columns.length - 1]
      : undefined;

    return columns?.map((cell, index) => {
      const cellId = `${rowId}-${index}`;

      const isDisabledCell = checkIsDisabled(
        isDisabled,
        availableCellsByIndex,
        index,
      );

      const isFirstCell = !Boolean(index);

      return (
        <CellStyled
          key={cellId}
          $level={isFirstCell ? level : 0}
          row={row}
          cell={cell}
          emptyCellValue={emptyCellValue}
          startAdornment={isFirstCell && startAdornmentRender()}
          isDisabled={isDisabledCell}
        />
      );
    });
  }, [isOpen, columns]);

  return (
    <>
      <Tooltip followCursor arrow={false} {...tooltipProps}>
        <Wrapper
          $level={level}
          $gridColumns={gridColumns}
          {...{ [DISABLE_ROW_ATTR]: isDisabled }}
          {...rowProps}
        >
          {renderCells()}
        </Wrapper>
      </Tooltip>

      <NestedChildren
        {...nestedChildrenProps}
        data={nestedChildren}
        keyId={keyId}
        level={level}
        initialOpenedNestedChildrenCount={initialOpenedNestedChildrenCount}
        renderRow={({ key, ...nestedRowProps }) => (
          <Row<TData>
            key={key}
            {...nestedRowProps}
            isSelectable={isSelectable}
            selectedRows={selectedRows}
            gridColumns={gridColumns}
            isInitialExpanded={isInitialExpanded}
            expandedLevel={expandedLevel}
            initialOpenedNestedChildrenCount={initialOpenedNestedChildrenCount}
            activeRowId={activeRowId}
            columns={columns}
            onSelectRow={onSelectRow}
            onRowClick={onRowClick}
          />
        )}
      />
    </>
  );
};
