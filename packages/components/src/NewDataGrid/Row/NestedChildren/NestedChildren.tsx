import { type ReactElement } from 'react';

import { Button } from '../../../Button';
import { Collapse } from '../../../Collapse';
import type { DataGridRowOptions } from '../../types';

import { useLogic } from './useLogic';
import { MoreButtonRow, NestedRows } from './styles';

export type NestedChildrenProps<TData extends Record<string, unknown>> = {
  /**
   * Если true, список дочерних элементов раскрыт
   */
  isOpen: boolean;

  /**
   * Данные для отображения
   */
  data: Array<TData & { options?: DataGridRowOptions }>;

  /**
   * Поле, которое будет использоваться в качестве ключа
   */
  keyId: keyof TData;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Количество отображаемых по умолчанию дочерних элементов
   */
  initialOpenedNestedChildrenCount: number;

  renderRow: ({
    key,
    keyId,
    level,
    row,
    nestedChildren,
    options,
  }: {
    key: string;
    row: TData;
    keyId: keyof TData;
    level: number;
    nestedChildren: Array<TData & { options?: DataGridRowOptions }>;
    options?: DataGridRowOptions;
  }) => ReactElement;
};

export const NestedChildren = <TData extends Record<string, unknown>>(
  props: NestedChildrenProps<TData>,
) => {
  const { isShowAllChildren, nextLevel, handleToggleShowAllChildren } =
    useLogic(props);

  const {
    isOpen,
    data,
    keyId,
    level,
    initialOpenedNestedChildrenCount,
    renderRow,
  } = props;

  if (!data || !data.length) {
    return null;
  }

  return (
    <Collapse in={isOpen} component="li">
      <NestedRows $level={level}>
        {data
          .slice(0, initialOpenedNestedChildrenCount)
          .map(({ children, options, ...nestedRow }) => {
            const nestedRowId = (nestedRow as TData)[keyId] as string;

            return renderRow({
              key: nestedRowId,
              row: nestedRow as TData,
              options,
              nestedChildren: children as Array<TData>,
              keyId,
              level: nextLevel,
            });
          })}

        {data?.length > initialOpenedNestedChildrenCount && (
          <>
            <Collapse in={isShowAllChildren} component="li">
              {data
                .slice(initialOpenedNestedChildrenCount)
                .map(({ children, options, ...nestedRow }) => {
                  const nestedRowId = (nestedRow as TData)[keyId] as string;

                  return renderRow({
                    key: nestedRowId,
                    keyId,
                    row: nestedRow as TData,
                    options,
                    nestedChildren: children as Array<TData>,
                    level: nextLevel,
                  });
                })}
            </Collapse>

            {data?.length > initialOpenedNestedChildrenCount && (
              <MoreButtonRow $level={nextLevel}>
                <Button variant="link" onClick={handleToggleShowAllChildren}>
                  {isShowAllChildren ? 'Скрыть' : 'Показать все'}
                </Button>
              </MoreButtonRow>
            )}
          </>
        )}
      </NestedRows>
    </Collapse>
  );
};
