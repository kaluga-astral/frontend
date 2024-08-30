import { type ChangeEvent, type ReactNode, useCallback } from 'react';

import { Checkbox } from '../../Checkbox';
import { Tooltip } from '../../Tooltip';
import type { CellValue, DataGridColumns, DataGridRowOptions } from '../types';

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
  ContentWrapper,
  Wrapper,
} from './styles';

export type RowProps<TData extends Record<string, CellValue>> = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

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
  nestedChildren: Array<TData & { options?: DataGridRowOptions<TData> }>;

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
  initialVisibleChildrenCount: number;

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
  options?: DataGridRowOptions<TData>;

  /**
   * Обработчик выбора строки
   */
  onSelectRow: (row: TData) => (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: TData) => void;
};

export const Row = <TData extends Record<string, CellValue>>(
  props: RowProps<TData>,
) => {
  const {
    isOpen,
    childrenColumns,
    rowId,
    handleToggle,
    checkboxProps,
    rowProps,
    tooltipProps,
    nestedChildrenProps,
    disabled,
  } = useLogic(props);

  const {
    className,
    row,
    options,
    isSelectable,
    gridColumns,
    isInitialExpanded,
    expandedLevel,
    level,
    nestedChildren,
    initialVisibleChildrenCount,
    columns,
    emptyCellValue,
    selectedRows,
    activeRowId,
    keyId,
    onSelectRow,
    onRowClick,
    // В этот rest-оператор попадают специфичные пропсы (атрибуты) virtuoso
    // Необходимы для NewDataGridInfinite
    ...selfProps
  } = props;

  const { isDisabledLastCell = true, isNotSelectable } = options || {};

  const renderStartAdornment = () => {
    if (!nestedChildren?.length && !isSelectable) {
      return null;
    }

    const hasNestedChildren = nestedChildren?.length > 0;
    const hasCheckbox = isSelectable && !isNotSelectable;

    if (!hasNestedChildren && !hasCheckbox) {
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

        {isSelectable && !isNotSelectable && (
          <CheckboxCell
            {...{ inert: disabled ? '' : undefined }}
            onClick={(event) => event.stopPropagation()}
          >
            <Checkbox {...checkboxProps} />
          </CheckboxCell>
        )}
      </>
    );
  };

  const renderCells = useCallback(() => {
    const availableCellsByIndex = !isDisabledLastCell
      ? [columns.length - 1]
      : undefined;

    return columns?.map((cell, index) => {
      const cellId = `${rowId}-${index}`;

      const isDisabledCell = checkIsDisabled(
        disabled,
        availableCellsByIndex,
        index,
      );

      const isFirstCell = !Boolean(index);

      return (
        <CellStyled
          key={cellId}
          $level={isFirstCell ? level : 0}
          row={row}
          cell={cell as DataGridColumns<Record<string, CellValue>>}
          emptyCellValue={emptyCellValue}
          startAdornment={isFirstCell && renderStartAdornment()}
          isDisabled={isDisabledCell}
        />
      );
    });
  }, [isOpen, columns, disabled]);

  const renderRow = useCallback(
    ({
      key,
      ...nestedRowProps
    }: { key: string } & Pick<
      RowProps<TData>,
      'row' | 'options' | 'nestedChildren' | 'level' | 'className'
    >) => (
      <Row<TData>
        key={key}
        keyId={keyId}
        {...nestedRowProps}
        isSelectable={isSelectable}
        selectedRows={selectedRows}
        gridColumns={gridColumns}
        isInitialExpanded={isInitialExpanded}
        expandedLevel={expandedLevel}
        initialVisibleChildrenCount={initialVisibleChildrenCount}
        activeRowId={activeRowId}
        columns={childrenColumns}
        onSelectRow={onSelectRow}
        onRowClick={onRowClick}
      />
    ),
    [
      keyId,
      isSelectable,
      selectedRows,
      gridColumns,
      isInitialExpanded,
      expandedLevel,
      initialVisibleChildrenCount,
      activeRowId,
      childrenColumns,
      onSelectRow,
      onRowClick,
    ],
  );

  return (
    <Wrapper
      $level={level}
      $gridColumns={gridColumns}
      className={className}
      {...selfProps}
    >
      <Tooltip followCursor arrow={false} {...tooltipProps}>
        <ContentWrapper
          $level={level}
          $gridColumns={gridColumns}
          {...{ [DISABLE_ROW_ATTR]: disabled }}
          {...rowProps}
        >
          {renderCells()}
        </ContentWrapper>
      </Tooltip>

      <NestedChildren
        {...nestedChildrenProps}
        data={nestedChildren as Array<TData>}
        keyId={keyId as string}
        level={level}
        initialVisibleChildrenCount={initialVisibleChildrenCount}
        // @ts-ignore
        renderRow={renderRow}
      />
    </Wrapper>
  );
};
