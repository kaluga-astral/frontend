import {
  type ChangeEvent,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import { ConfigContext } from '../../ConfigProvider';
import { ContentState } from '../../ContentState';
import { Cell } from '../Cell';
import { Row } from '../Row';
import type { DataGridColumns, DataGridRowOptions } from '../types';

import { checkIsDisabled } from './utils';
import { useLogic } from './useLogic';
import { Wrapper } from './styles';

export type BodyProps<TData extends Record<string, unknown>> = {
  /**
   * Конфигурация колонок для таблицы
   */
  columns: DataGridColumns<TData>[];

  /**
   * Поле, которое будет использоваться в качестве ключа
   */
  keyId: keyof TData;

  /**
   * Конфигурация ширины колонок
   */
  gridColumns: string;

  /**
   * Если true, показывается анимация загрузки
   */
  isLoading?: boolean;

  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;

  /**
   * Текст ошибки
   */
  errorMsg?: string;

  /**
   * Идентификатор активного элемента массива rows. Выделяет активную строку в таблице
   */
  activeRowId?: string;

  /**
   * Если true, то будет отображаться чекбокс для выбора элемента
   */
  isSelectable?: boolean;

  /**
   * Массив выбранных строк
   */
  selectedRows?: Array<TData>;

  /**
   * Массив данных для отображения
   */
  rows: Array<TData & { options?: DataGridRowOptions }>;

  /**
   * Используется для отображения переданного кол-ва строк при отсутствии данных
   */
  minDisplayRows: number;

  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   */
  emptyCellValue?: ReactNode;

  /**
   *  Используется для отображения placeholder при отсутствии данных в таблице
   */
  noDataPlaceholder?: ReactNode;

  /**
   * Обработчик выбора строки
   */
  onSelectRow: (row: TData) => (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry: () => void;

  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: TData) => void;
};

export const Body = <TData extends Record<string, unknown>>(
  props: BodyProps<TData>,
) => {
  const { imagesMap } = useContext(ConfigContext);

  const { isNoData } = useLogic(props);

  const {
    rows,
    columns,
    isSelectable,
    gridColumns,
    selectedRows = [],
    isLoading,
    isError,
    errorMsg,
    minDisplayRows,
    keyId,
    activeRowId,
    emptyCellValue,
    noDataPlaceholder,
    onRowClick,
    onSelectRow,
    onRetry,
  } = props;

  const renderCells = useCallback(
    (row: TData, rowId: string, options?: DataGridRowOptions) => {
      const { isDisabled, isDisabledLastCell = true } = options || {};

      const availableCellsByIndex = !isDisabledLastCell
        ? [columns.length - 1]
        : undefined;

      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;

        const isDisabledCell = checkIsDisabled(
          isDisabled,
          availableCellsByIndex,
          index,
        );

        return (
          <Cell<TData>
            key={cellId}
            row={row}
            cell={cell}
            emptyCellValue={emptyCellValue}
            isDisabled={isDisabledCell}
          />
        );
      });
    },
    [columns],
  );

  const renderedRows = useMemo(() => {
    return rows.map(({ options, ...row }) => {
      const rowId = (row as TData)[keyId] as string;

      return (
        <Row
          key={rowId}
          row={row as TData}
          isSelectable={isSelectable}
          selectedRows={selectedRows}
          gridColumns={gridColumns}
          options={options}
          keyId={keyId}
          activeRowId={activeRowId}
          onSelectRow={onSelectRow}
          onRowClick={onRowClick}
        >
          {renderCells(row as TData, rowId, options)}
        </Row>
      );
    });
  }, [
    rows,
    keyId,
    isSelectable,
    selectedRows,
    onSelectRow,
    onRowClick,
    columns,
  ]);

  return (
    <Wrapper $isEmpty={isNoData} $minDisplayRows={minDisplayRows}>
      <ContentState
        isLoading={isLoading && isNoData}
        isError={isError && isNoData}
        errorState={{
          imgAlt: 'Что-то пошло не так',
          errorList: [errorMsg || ''],
          imgSrc: imagesMap.defaultErrorImgSrc,
          onRetry,
        }}
      >
        {rows.length ? renderedRows : noDataPlaceholder}
      </ContentState>
    </Wrapper>
  );
};
