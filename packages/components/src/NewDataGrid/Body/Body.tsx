import { type ChangeEvent, type ReactNode, useContext, useMemo } from 'react';

import { ConfigContext } from '../../ConfigProvider';
import { ContentState } from '../../ContentState';
import { DataGridContextProvider } from '../DataGridContext';
import { Row } from '../Row';
import type { CellValue, DataGridColumns, DataGridRowOptions } from '../types';

import { useLogic } from './useLogic';
import { Wrapper } from './styles';

export type BodyProps<TData extends Record<string, CellValue>> = {
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
   * Если true, то дерево будет раскрыто по умолчанию
   * @default 'false'
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
   * Массив данных для отображения
   */
  rows: Array<TData & { options?: DataGridRowOptions<TData> }>;

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

const INITIAL_LEVEL = 0;

export const Body = <TData extends Record<string, CellValue>>(
  props: BodyProps<TData>,
) => {
  const { imagesMap } = useContext(ConfigContext);

  const { isNoData, contentStateProps } = useLogic(props);

  const {
    rows,
    selectedRows = [],
    isLoading,
    isError,
    errorMsg,
    minDisplayRows,
    keyId,
    noDataPlaceholder,
    onRetry,
    ...rowProps
  } = props;

  const renderedRows = useMemo(() => {
    return rows.map(({ children, options, ...row }) => {
      const rowId = (row as TData)[keyId] as string;

      return (
        <Row
          key={rowId}
          row={row as TData}
          selectedRows={selectedRows}
          options={options}
          keyId={keyId}
          level={INITIAL_LEVEL}
          nestedChildren={children as Array<TData>}
          {...rowProps}
        />
      );
    });
  }, [rows, keyId, selectedRows, rowProps]);

  return (
    <DataGridContextProvider keyId={keyId as string}>
      <Wrapper $isEmpty={isNoData} $minDisplayRows={minDisplayRows}>
        <ContentState
          {...contentStateProps}
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
    </DataGridContextProvider>
  );
};
