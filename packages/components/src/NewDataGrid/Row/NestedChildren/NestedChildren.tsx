import { type ReactElement, memo } from 'react';

import { Button } from '../../../Button';
import { Collapse } from '../../../Collapse';
import type { CellValue, DataGridRowOptions } from '../../types';
import { HIDDEN_CHILDREN_ROW_CLASSNAME } from '../constants';

import { useLogic } from './useLogic';
import { MoreButtonRow, NestedRows } from './styles';

export type NestedChildrenProps<TData extends Record<string, CellValue>> = {
  /**
   * Если true, список дочерних элементов раскрыт
   */
  isOpen: boolean;

  /**
   * Данные для отображения
   */
  data: Array<TData & { options?: DataGridRowOptions<TData> }>;

  /**
   * Поле, которое будет использоваться в качестве ключа
   */
  keyId: keyof TData;

  /**
   * Идентификатор строки
   */
  rowId: string;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Количество отображаемых по умолчанию дочерних элементов
   */
  initialVisibleChildrenCount: number;

  renderRow: ({
    key,
    level,
    row,
    nestedChildren,
    options,
    className,
  }: {
    key: string;
    row: TData;
    level: number;
    nestedChildren: Array<TData & { options?: DataGridRowOptions<TData> }>;
    options?: DataGridRowOptions<TData>;
    className?: string;
  }) => ReactElement;
};

export const NestedChildren = memo(
  <TData extends Record<string, CellValue>>(
    props: NestedChildrenProps<TData>,
  ) => {
    const {
      isShowAllChildren,
      nextLevel,
      initialVisibleChildren,
      otherChildren,
      handleToggleShowAllChildren,
    } = useLogic(props);

    const { isOpen, data, keyId, level, renderRow } = props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Collapse in={isOpen} unmountOnExit>
        <NestedRows $level={level}>
          {initialVisibleChildren.map(({ children, options, ...nestedRow }) => {
            const nestedRowId = (nestedRow as TData)[keyId] as string;

            return renderRow({
              key: nestedRowId,
              row: nestedRow as TData,
              options,
              nestedChildren: children as Array<TData>,
              level: nextLevel,
            });
          })}

          {isOpen && (
            <>
              <Collapse in={isShowAllChildren} unmountOnExit>
                <NestedRows $level={level}>
                  {otherChildren.map(({ children, options, ...nestedRow }) => {
                    const nestedRowId = (nestedRow as TData)[keyId] as string;

                    return renderRow({
                      key: nestedRowId,
                      row: nestedRow as TData,
                      options,
                      nestedChildren: children as Array<TData>,
                      level: nextLevel,
                      className: HIDDEN_CHILDREN_ROW_CLASSNAME,
                    });
                  })}
                </NestedRows>
              </Collapse>

              <MoreButtonRow $level={nextLevel}>
                <Button variant="link" onClick={handleToggleShowAllChildren}>
                  {isShowAllChildren ? 'Скрыть' : 'Показать все'}
                </Button>
              </MoreButtonRow>
            </>
          )}
        </NestedRows>
      </Collapse>
    );
  },
);
