import { useEffect, useMemo, useRef } from 'react';

import { useId } from '../../hooks/useId';
import { getFormatDisabledItems } from '../../Tree/utils';
import { type TreeLikeListProps } from '../TreeLikeList';

import { getChainsId } from './utils';

type UseLogicParams = TreeLikeListProps;

export const useLogic = ({ data, value, disabledItems }: UseLogicParams) => {
  const prefixId = useId();

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && value?.length) {
      // Выбираем первый элемент из списка value
      const targetItem = listRef.current.querySelector(`
        li[id="${prefixId}${value[0]}"]`);

      if (targetItem) {
        targetItem.scrollIntoView({ block: 'center' });
      }
    }
  }, [listRef, prefixId]);

  const formattedDisabledItems = useMemo(
    () => getFormatDisabledItems(disabledItems),
    [disabledItems],
  );

  const chainsToSelectedItem = useMemo(
    () => getChainsId(data, value),
    [data, value],
  );

  return {
    listProps: {
      ref: listRef,
    },
    itemProps: {
      chainsToSelectedItem,
      disabledItems: formattedDisabledItems,
      prefixId,
    },
  };
};
