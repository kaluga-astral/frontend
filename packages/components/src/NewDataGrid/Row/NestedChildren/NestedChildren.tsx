import { type ReactElement, memo } from 'react';

import { Collapse } from '../../../Collapse';
import type { Variant } from '../../enums';
import type { CellValue, DataGridRowOptions } from '../../types';
import { HIDDEN_CHILDREN_ROW_CLASSNAME } from '../constants';

import { useLogic } from './useLogic';
import { MoreButton, MoreButtonRow, NestedRows } from './styles';

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
   * Вариант отображения вложенных элементов
   */
  variant: `${Variant}`;

  /**
   * Конфигурация ширины колонок
   */
  gridColumns: string;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Количество отображаемых по умолчанию дочерних элементов
   */
  initialVisibleChildrenCount: number;

  /**
   * Номер колонки, в которой будет расположена кнопка "Показать все"
   * Работает только для `variant="subrows"`
   */
  moreButtonColumnPosition: number;

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
      isShowMoreButton,
      isShowConnector,
      nextLevel,
      initialVisibleChildren,
      otherChildren,
      handleToggleShowAllChildren,
    } = useLogic(props);

    const {
      isOpen,
      data,
      keyId,
      level,
      gridColumns,
      moreButtonColumnPosition,
      renderRow,
    } = props;

    if (!data || !data.length) {
      return null;
    }

    return (
      <Collapse in={isOpen} unmountOnExit>
        <NestedRows $level={level} $isShowConnector={isShowConnector}>
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
              <Collapse in={isShowAllChildren} component="li" unmountOnExit>
                <NestedRows $level={level} $isShowConnector={isShowConnector}>
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

              {isShowMoreButton && (
                <MoreButtonRow
                  $level={nextLevel}
                  $isShowConnector={isShowConnector}
                  $gridColumns={gridColumns}
                >
                  <MoreButton
                    $moreButtonColumnPosition={moreButtonColumnPosition}
                    variant="link"
                    onClick={handleToggleShowAllChildren}
                  >
                    {isShowAllChildren ? 'Скрыть' : 'Показать все'}
                  </MoreButton>
                </MoreButtonRow>
              )}
            </>
          )}
        </NestedRows>
      </Collapse>
    );
  },
);
