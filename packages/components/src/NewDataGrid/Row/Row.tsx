import { type ChangeEvent, type ReactNode } from 'react';

import { Checkbox } from '../../Checkbox';
import { Tooltip } from '../../Tooltip';
import type { DataGridRowOptions } from '../types';

import { useLogic } from './useLogic';
import { DISABLE_ROW_ATTR } from './constants';
import { CheckboxCell, Wrapper } from './styles';

export type RowProps<TData extends Record<string, unknown>> = {
  /**
   * Поле, которое будет использоваться в качестве ключа
   */
  keyId: keyof TData;

  /**
   * Массив данных для отображения
   */
  row: TData;

  /**
   * Конфигурация ширины колонок
   */
  gridColumns: string;

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
   * Дополнительные настройки строки
   */
  options?: DataGridRowOptions;

  /**
   * Содержимое строки
   */
  children: ReactNode;

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
  const { isDisabled, checkboxProps, rowProps, tooltipProps } = useLogic(props);

  const { isSelectable, gridColumns, children } = props;

  return (
    <Tooltip followCursor arrow={false} {...tooltipProps}>
      <Wrapper
        $gridColumns={gridColumns}
        {...{ [DISABLE_ROW_ATTR]: isDisabled }}
        {...rowProps}
      >
        {isSelectable && (
          <CheckboxCell
            {...{ inert: isDisabled ? '' : undefined }}
            onClick={(event) => event.stopPropagation()}
          >
            <Checkbox {...checkboxProps} />
          </CheckboxCell>
        )}
        {children}
      </Wrapper>
    </Tooltip>
  );
};
