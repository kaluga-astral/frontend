import { useEffect, useMemo, useRef } from 'react';

import { getFormatDisabledItems } from '../../utils';
import { useId } from '../../../hooks/useId';
import type { TreeListProps } from '../types';

import { getChainId } from './utils';

type UseLogicParams = TreeListProps;

export const useLogic = ({ value, data, disabledItems }: UseLogicParams) => {
  const prefixId = useId();

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && value) {
      const targetItem = listRef.current.querySelector(`
        li[id="${prefixId}${value}"]`);

      if (targetItem) {
        targetItem.scrollIntoView({ block: 'center' });
      }
    }
  }, [listRef, prefixId, data]);

  const formattedDisabledItems = useMemo(
    () => getFormatDisabledItems(disabledItems),
    [disabledItems],
  );

  const chainToSelectedItem = useMemo(
    () => getChainId(data, value),
    [data, value],
  );

  return {
    listProps: {
      ref: listRef,
    },
    itemProps: {
      chainToSelectedItem,
      disabledItems: formattedDisabledItems,
      prefixId,
    },
  };
};
