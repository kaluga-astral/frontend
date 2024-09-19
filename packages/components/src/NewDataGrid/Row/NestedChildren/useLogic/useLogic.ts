import { type MouseEvent, useContext } from 'react';

import { DataGridContext } from '../../../DataGridContext';
import { Variant } from '../../../enums';
import type { CellValue } from '../../../types';
import { type NestedChildrenProps } from '../NestedChildren';

type UseLogicParams<TData extends Record<string, CellValue>> =
  NestedChildrenProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  rowId,
  data,
  level,
  variant,
  initialVisibleChildrenCount,
}: UseLogicParams<TData>) => {
  const { checkIsMoreOpened, toggleOpenMoreItems } =
    useContext(DataGridContext);

  const isTreeVariant = Object.is(variant, Variant.Tree);
  const nextLevel = isTreeVariant ? level + 1 : 0;

  const initialVisibleChildren = data?.slice(0, initialVisibleChildrenCount);
  const otherChildren = data?.slice(initialVisibleChildrenCount);

  const isShowAllChildren = checkIsMoreOpened(rowId);
  const isShowMoreButton = Boolean(otherChildren?.length);

  const handleToggleShowAllChildren = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggleOpenMoreItems(rowId);
  };

  return {
    isShowAllChildren,
    isShowMoreButton,
    isShowConnector: isTreeVariant,
    initialVisibleChildren,
    otherChildren,
    nextLevel,
    handleToggleShowAllChildren,
  };
};
